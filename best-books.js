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

    let book = responseJson.results.books[0].title;
    console.log("book = " + book);
    const bookContainer = document.getElementById("books-container");
    const book1 = document.createElement("div");
    book1.innerHTML = book;
    bookContainer.appendChild(book1);

    const mainHeadline = article.headline.main;
    console.log(mainHeadline);
    document.getElementById("article-title").innerText = mainHeadline;

    // if (article.multimedia.length > 0) {
    //   const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
    //   document.getElementById("article-img").src = imgUrl;
    // }
  });
