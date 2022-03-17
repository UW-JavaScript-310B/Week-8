const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksDisplay = document.getElementById('books-container');



formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  let fullDate = `${year}-${month}-${date}`
  console.log(fullDate)

  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${fullDate}/hardcover-fiction.json`;
  console.log(BASE_URL)

  const API_KEY = `unpDMPMr1Wzze5mCq51lThaDh1Ns19sf`;

  const url = `${BASE_URL}?api-key=${API_KEY}`;

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);

      let books = responseJson.results.books;
      console.log(books);

      booksDisplay.innerHTML = 'Display Books Here'

      for (let i = 0; i < 5; i++) {
        console.log(books[i]);
        console.log(books[i].title)
        console.log(books[i].author)
        console.log(books[i].description)
        const title = books[i].title;
        const author = books[i].author;
        const descr = books[i].description;
        const text = document.createElement('ul')
        text.innerHTML = `<li>${title}</li><li>${author}</li><li>${descr}</li>`
        booksDisplay.append(text);
      }
    });


});