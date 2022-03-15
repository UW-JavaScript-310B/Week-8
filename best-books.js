const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  // Define some input vars
  const dateInput = `${year}-${month}-${date}`;
  const list = 'hardcover-fiction';  
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${dateInput}/${list}.json`;

  const url = `${BASE_URL}?api-key=${API_KEY}`;

  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {
      // console.log(responseJson);

      let books = responseJson.results.books;
      // console.log(books);
      // Get the book container element
      const bookContainer = document.getElementById('books-container');
      // Describe this container
      bookContainer.innerHTML='First five best selling books:';
      // Call this function to show the first 5 books in the book container
      showBookList(books, 5, bookContainer);
    });  
});

function showBookList(books, noOfBooks, bookContainer) {
  // check if the books array has some items
  if (books.length > 0) {
    // Scan through the first 'noOfBooks' books
    for (let i = 0; i < books.length; i++) {
      // End looping when passing the first <noOfBooks> items 
      if (i >= noOfBooks) {
        break;
      }
      // Get the title, author, desc and image info of this book
      const title = books[i].title;
      const author = books[i].author;
      const desc = books[i].description;
      const image = books[i].book_image;
      const image_height = books[i].book_image_height;
      const image_width = books[i].book_image_width;
      // Display all these info above to the best-books.html

      // Create a new <div> element for each book
      const bookDiv = document.createElement('div');
      // Create a new element for each one above
      const titleEl = document.createElement('h3');
      titleEl.innerText = title;
      titleEl.className = 'title';
      const authorEl = document.createElement('p');
      authorEl.innerText = `Author: ${author}`;
      authorEl.className = 'author';
      const descEl = document.createElement('p');
      descEl.innerText = desc;
      // Create a new image element
      const imageEl = document.createElement('img');
      imageEl.src = image;
      imageEl.style.height = image_height;
      imageEl.style.width = image_width;
      // Append these elements into bookDiv
      bookDiv.appendChild(titleEl);
      bookDiv.appendChild(authorEl);
      bookDiv.appendChild(imageEl);
      bookDiv.appendChild(descEl);
      // Append this bookDiv into the book container
      bookContainer.appendChild(bookDiv);
    }
  }  
};