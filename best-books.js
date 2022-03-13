const BASE_URL2 = ` https://api.nytimes.com/svc/books/v3/lists.json`;
const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json`;
const API_KEY = 'rV4AuY2xlqcPAw0HIb7H8zkyQGSZpCsB';



const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');



formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const day = dayEl.value;
  const list = 'hardcover-fiction';
  const date = `${year}-${month}-${day}`;
  const url = `${BASE_URL2}?bestsellers-date=${date}&list=${list}&api-key=${API_KEY}`;

  // console.log(date);
  // console.log(url);
// debugger
//remove bestseller books from a prior request  -- doesn't work
//const containerPrior = document.getElementById('books-container');
const containerPrior = document.querySelector('#books-container');
  while (containerPrior.firstChild) {
    containerPrior.removeChild(containerPrior.firstChild);
  }
  

console.log(containerPrior);
console.log(containerPrior.children)

  // Fetch bestselling books for date and add top 5 to page
  fetch(url)
    .then(function (data) {
      return data.json();
    })
//DEFINE THE ARRAY OF BOOKS THAT RETURNS FROM THE FETCH
    .then(function (responseJson) {
      console.log(responseJson);

//DEFINE THE FIVE BOOKS THAT WILL DISPLAY ON THE PAGE
      for (let i = 0; i < 5; i++) {

        const books = responseJson.results[i].book_details[0];
        console.log(books);

//DEFINE VARIABLES THAT WILL BE NEEDED TO POPULATE THE PAGE
        const bookTitle = books.title;
        // console.log(bookTitle);

        const author = books.author;
        // console.log(author);

        const descr = books.description;
        // console.log(descr);

//ADD THE FIVE BOOKS TO THE HTML PAGE
        const container = document.getElementById("books-container");
        // console.log(container);

        const bestsellers = document.createElement("div");
        // bestsellers.setAttribute("class", "prior");

        bestsellers.innerHTML =
          `<h2>${bookTitle}</h2>
            <p><span>Author:  </span>${author}</p>
            <p><span>Description:  </span>${descr}</p>`

        container.appendChild(bestsellers);
      }
    })
//CONSOLE A MESSAGE IF THE FETCH IS NOT SUCCESSFUL
    .catch(function () {
      console.log(`No data returned from the fetch request`)
    })

});