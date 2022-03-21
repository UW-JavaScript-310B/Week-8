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
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/overview.json`;
  const fullDate = `${year}-${month}-${date}`;
  const url = `${BASE_URL}?bestsellers_date=${fullDate}&api-key=${API_KEY}`;

  fetch(url)
  .then(function(data) {
    return data.json()  
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let book = responseJson.results.lists[2].books;

    for (i=0;i<=4;i++){
      const titleBook = document.createTextNode(`${book[i].title}`);
      const authorBook = document.createTextNode(`${book[i].author}`);
      const descriptionBook = document.createTextNode(`${book[i].description}`);
      const imgBook = new Image(book[i].book_image_width, book[i].book_image_height);
      const newAuth = document.getElementById(`books-container`);
      imgBook.src = book[i].book_image;

      newAuth.appendChild(imgBook);
      newAuth.appendChild(document.createElement('br'));

      newAuth.appendChild(titleBook);
      newAuth.appendChild(document.createElement('br'));

      newAuth.appendChild(authorBook);
      newAuth.appendChild(document.createElement('br'));
      
      newAuth.appendChild(descriptionBook);
      newAuth.appendChild(document.createElement('br'));
      newAuth.appendChild(document.createElement('br'));
    }
  })
});