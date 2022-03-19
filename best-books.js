const formEl = document.getElementById("best-books-form");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  url = buildURL(year, month, date);
  getBookData(url);
});

function buildURL(year, month, date) {
  let DATE = year + "-" + month + "-" + date;

  if (!year || !month || !date) {
    DATE = "current";
  }
  // create api-key.js file with const API_KEY="your_api_key" in this same directory to use
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`;
  const ENDPONT = `${DATE}/hardcover-fiction.json`;
  const URL = `${BASE_URL}${ENDPONT}?api-key=${API_KEY}`;
  console.log(URL);
  return URL;
}

//TODO add logic to provide a message when fetch returns a non 200 response
function getBookData(url) {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);

      generateBookTable(responseJson);
    })
    .catch(() => {
      generateTableHeader();
    });
}

function generateTableHeader() {
  const bookContainer = document.getElementById("books-container");

  if (document.getElementById("book-table")) {
    bookContainer.removeChild(document.getElementById("book-table"));
  }
  const bookTable = document.createElement("table");
  bookTable.setAttribute("id", "book-table");
  bookContainer.appendChild(bookTable);
  const bookRow = document.createElement("tr");
  bookTable.appendChild(bookRow);
  const bookHeader1 = document.createElement("th");
  bookTable.appendChild(bookHeader1);
  bookHeader1.innerHTML = "Name";
  const bookHeader2 = document.createElement("th");
  bookTable.appendChild(bookHeader2);
  bookHeader2.innerHTML = "Author";
  const bookHeader3 = document.createElement("th");
  bookTable.appendChild(bookHeader3);
  bookHeader3.innerHTML = "Description";

  return bookTable;
}
function generateBookTable(responseJson) {
  const bookTable = generateTableHeader();

  for (let index = 0; index < 5; index++) {
    const bookRow = document.createElement("tr");
    bookTable.appendChild(bookRow);
    const bookTD1 = document.createElement("td");
    bookRow.appendChild(bookTD1);
    const bookTD2 = document.createElement("td");
    bookRow.appendChild(bookTD2);
    const bookTD3 = document.createElement("td");
    bookRow.appendChild(bookTD3);

    let bookTitle = responseJson.results.books[index].title;
    let bookAuthor = responseJson.results.books[index].author;
    let bookDescription = responseJson.results.books[index].description;

    bookTD1.innerHTML = bookTitle;
    bookTD2.innerHTML = bookAuthor;
    bookTD3.innerHTML = bookDescription;
  }
}
