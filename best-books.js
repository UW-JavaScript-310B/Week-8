const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists.json';
const API_KEY = 'Mw3gTbcu64AA9nRU52b8GL7cuixGE71I';

const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');


formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const container = document.getElementById('books-container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

const year = yearEl.value;
const month = monthEl.value;
const date = dateEl.value;

console.log(year);
console.log(month);
console.log(date);
const publishedDate = `${year}-${month}-${date}`;

console.log(publishedDate);
const url = `${BASE_URL}?published-date=${publishedDate}&list=hardcover-fiction&api-key=${API_KEY}`;

console.log(url);
//   // Fetch bestselling books for date and add top 5 to page
  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    for (let index = 0; index <= 4; index++) {
      let books = responseJson.results[index].book_details[0];
      console.log(books);
      const title = books.title;
      const author = books.contributor; 
      const description = books.description;
      
      
      const div = document.createElement('div');
      container.appendChild(div);
      div.innerHTML = `<h1>${title}</h1><h2>${author}</h2><p>${description}</p>`

    }

  });
});
