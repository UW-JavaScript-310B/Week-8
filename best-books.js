const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const bookCont = document.getElementsByClassName('books-container')[0];
const bookList = document.getElementById('book-list');


formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  let formDate = `${year}-${month}-${date}`

  console.log(formDate);

  // Fetch bestselling books for date and add top 5 to page

  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';


  const url = `${BASE_URL}?published_date=${formDate}&api-key=${API_KEY}`;

  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);
    let books = responseJson.results.lists[0].books;

    function bookInfo(book){
      const newDiv = document.createElement('div');
      newDiv.innerHTML = "<br/> <br/> <br/>";
      const newContent = document.createTextNode(`-- Title: ${book.title} By: ${book.author} Description: ${book.description}` );
      newDiv.appendChild(newContent);

      bookList.appendChild(newDiv);
    }

    books.forEach(bookInfo);
  });

});
