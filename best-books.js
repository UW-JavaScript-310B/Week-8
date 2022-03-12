const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const container = document.getElementById('books-container');

const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`;
const key = `?&api-key=${API_KEY}`;

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  fetch(`${BASE_URL}${year}-${month}-${date}/hardcover-fiction.json${key}`)
  .then(data => data.json())
  .then(response => {
    console.log(response);
    response.results.books.forEach(book => {
      let title = document.createElement('p');
      title.innerText = `Title: ${book.title.toLowerCase()}`;
      container.appendChild(title);

      let author = document.createElement('p');
      author.innerText = `Author: ${book.author.toLowerCase()}`;
      container.appendChild(author);

      let description = document.createElement('p');
      description.innerText = `Description: ${book.description.toLowerCase()}`;
      container.appendChild(description);
    })
  })
});
