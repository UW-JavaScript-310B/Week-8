//`https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json`

const BASE_URL2 =` https://api.nytimes.com/svc/books/v3/lists.json`;
const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json`;
const API_KEY = 'rV4AuY2xlqcPAw0HIb7H8zkyQGSZpCsB';



const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');



formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const day = dayEl.value;
  const list = 'hardcover-fiction';
  const date = `${year}-${month}-${day}`;
  const num_results = 5;
  // const url = `${BASE_URL}?date=${date}&list=${list}&api-key=${API_KEY}`;
  const url = `${BASE_URL2}?bestsellers-date=${date}&list=${list}&api-key=${API_KEY}`;

  // Fetch bestselling books for date and add top 5 to page
  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);


    let books = responseJson.results[0].book_details[0];
    console.log(books);
  
    const bookTitle = books.title;
    console.log(bookTitle);
    document.getElementById('book-title').innerText = bookTitle;

    const author = books.author;
    console.log(author);
    document.getElementById('book-author').innerText = `Author: ${author}`;

    const descr = books.description;
    console.log(descr);
    document.getElementById('book-descr').innerText = `Description: ${descr}`;
 
    
  });

});
