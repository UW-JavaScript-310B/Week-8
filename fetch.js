// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/';
const API_KEY = '6qHvDlODWzBgro8ICWhj0PgG95ufriDo';
let searchResultsEl = document.getElementById("searchResults");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
document.getElementById('best-books-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let datePicked = document.getElementById("book-date").value;
  let url = `${BASE_URL}/${datePicked}/hardcover-fiction.json?api-key=${API_KEY}`;
  // Fetch bestselling books for date and add top 5 to page
  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {
      console.log(responseJson.results.books);
      console.log(responseJson.results);
      console.log(responseJson);
      let books = responseJson.results.books;

      if (books.length == 0) return;

      removeAllChildNodes(searchResultsEl);
      searchResultsEl.classList.remove("error");

      for(let i = 0; i < 5; i++ ) {
        if (books[i]) {
          const h1 = document.createElement("h1");
          let textNode = document.createTextNode(books[i].title);
          h1.appendChild(textNode);
          searchResultsEl.appendChild(h1);

          const h4 = document.createElement("h4");
          textNode = document.createTextNode(books[i].author);
          h1.appendChild(textNode);
          searchResultsEl.appendChild(h4);

          const para = document.createElement("p");
          textNode = document.createTextNode(books[i].description);
          para.appendChild(textNode);
          searchResultsEl.appendChild(para);

          const img = document.createElement("img");
          img.src = books[i].book_image;
          searchResultsEl.appendChild(img);

          let hr = document. createElement("hr");
          hr.setAttribute("width", "100%");
          hr.setAttribute("align", "left");
          searchResultsEl.append(hr);

          let lb = document. createElement("br");
          searchResultsEl.append(lb);
        }
      }
    })
    .catch(() => {
      removeAllChildNodes(searchResultsEl);
      searchResultsEl.innerText = "No books for this date.";
      searchResultsEl.classList.add("error");
    });
});

