// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json";
const API_KEY = "Ta7hDm6AnnzMdHOXkjTT76x6OgLhPoQO";
const url = `${BASE_URL}?api-key=${API_KEY}`;

const formEl = document.getElementById("best-books-form");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
});
console.log(url);

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (responseJson) {
    console.log(responseJson);

    generateBookTable(responseJson);
    const mainHeadline = article.headline.main;
    console.log(mainHeadline);
    document.getElementById("article-title").innerText = mainHeadline;
  });

function generateBookTable(responseJson) {
  const bookContainer = document.getElementById("books-container");
  const bookTable = document.createElement("table");
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

  for (let index = 0; index < 5; index++) {
    const bookRow = document.createElement("tr");
    bookTable.appendChild(bookRow);
    const bookTD = document.createElement("td");
    bookRow.appendChild(bookTD);

    let bookTitle = responseJson.results.books[index].title;
    let bookAuthor = responseJson.results.books[index].author;
    let bookDescription = responseJson.results.books[index].description;
    //const book1 = document.createElement("div");
    bookTD.innerHTML = bookTitle + " | " + bookAuthor + " | " + bookDescription;
  }
}

// if (article.multimedia.length > 0) {
//   const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
//   document.getElementById("article-img").src = imgUrl;
// }
