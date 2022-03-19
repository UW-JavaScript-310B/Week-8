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

  if (year == "" || month == "" || date == "") {
    DATE = "current";
  }
  // create api-key.js file with const API_KEY="your_api_key" in this same directory to use
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${DATE}/hardcover-fiction.json`;
  const url = `${BASE_URL}?api-key=${API_KEY}`;
  console.log(url);
  return url;
}

function getBookData(url) {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);

      generateBookTable(responseJson);
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

// if (article.multimedia.length > 0) {
//   const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
//   document.getElementById("article-img").src = imgUrl;
// }
