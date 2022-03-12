// Reference DOM elements.
const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById("books-container");

// nytimes API constants.
const BASE_URL = "https://api.nytimes.com/svc/books/v3/lists";
// ** Insert API key here: **
const API_KEY = "";

// Number of bestsellers to display.
const NUMBER_OF_BEST_SELLERS = 5;

// requestBooks ///////////////////////////////////////////////////////////////
// Requests a list of best selling books given a year, month, and date,
// then displays them if the request is successful.
const requestBooks = (year, month, date) => {
  // Construct URL query.
  const URL = `${BASE_URL}/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`
  // Fetch date's best seller data.
  fetch(URL)
  .then((retrievedData) => {
    console.log("nytimes request successful.");
    return retrievedData.json();
  })
  // Filter data to best seller list results & display.
  .then((jsonifiedData) => {
    displayBooks(jsonifiedData.results.books);
  })
  // catch() fail message.
  .catch(() => {
    console.log("nytimes request failed.");
  });
}

// displayBooks ///////////////////////////////////////////////////////////////
// Displays a set number of best sellers given an array of best sellers.
const displayBooks = (books) => {
  booksContainer.innerHTML = "";
  for (let i = 0; i <= NUMBER_OF_BEST_SELLERS - 1; i++) {
    displayBook(books[i]);
  }
}

// displayBook ////////////////////////////////////////////////////////////////
// Adds a displayed book to "books-container" for display.
const displayBook = (book) => {
  const bookDisplay = document.createElement("div");
  bookDisplay.className = "book-display";
  console.log(book);
  bookDisplay.innerHTML =
    `<img src="${book.book_image}" alt="${book.title}">
    <h2>${book.title}</h2>
    <p><em>${book.author}</em></p>
    <p>${book.description}</p>`
  booksContainer.appendChild(bookDisplay);
}

///////////////////////////////////////////////////////////////////////////////

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  requestBooks(year, month, date);
});
