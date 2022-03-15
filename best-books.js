const container = document.getElementById('books-container');

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('year'));


const yearEl = urlParams.get('year');
const monthEl = urlParams.get('month');
const dateEl = urlParams.get('date');
const genreEl = urlParams.get('genre');
const formatEl = urlParams.get('format');

const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`;
const key = `?api-key=${API_KEY}`;

function fetchNytData() {

  fetch(`${BASE_URL}${yearEl}-${monthEl}-${dateEl}/${formatEl}-${genreEl}.json${key}`)
  .then(data => data.json())
  .then(response => {
    console.log(response);
    response.results.books.forEach(book => {
      let bookCard = document.createElement('div');
      bookCard.classList.add('book-card', 'col-12', 'col-lg-6', 'row');

      let bookCardInnerLeft = document.createElement('div');
      bookCardInnerLeft.classList.add('col-4');

      let baseUrl = `https://covers.openlibrary.org/b/ISBN`;
      const coverSize = `M`;

      let coverImage = document.createElement('img');
      fetch(`${baseUrl}/${book.isbns[0].isbn10}-${coverSize}.jpg`)
      .then(response => {
        console.log(response);
        let imageSrc = response.url;
        coverImage.setAttribute('src', imageSrc);
        bookCardInnerLeft.append(coverImage);
      })

      let bookCardInnerRight = document.createElement('div');
      bookCardInnerRight.classList.add('col-8');

      let title = document.createElement('h3');
      title.innerText = `${titleCase(book.title)}`;
      bookCardInnerRight.appendChild(title);

      let author = document.createElement('h5');
      author.innerText = `${titleCase(book.author)}`;
      bookCardInnerRight.appendChild(author);

      let description = document.createElement('p');
      description.innerText = `${sentenceCase(book.description)}`;
      bookCardInnerRight.appendChild(description);

      let isbn = document.createElement('p');
      isbn.innerText = `ISBN: ${book.isbns[0].isbn10}`;
      bookCardInnerRight.appendChild(isbn);

      bookCard.appendChild(bookCardInnerLeft);
      bookCard.appendChild(bookCardInnerRight);
      container.append(bookCard);
    })
  });
}

function titleCase(str) {
  return (str.toLowerCase().split(' ')).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function sentenceCase(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
}

fetchNytData();