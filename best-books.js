const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';
  const date = `${yearEl.value}-${monthEl.value}-${dateEl.value}`
  const url = `${BASE_URL}?published_date=${date}&api-key=${API_KEY}`;
  counter = 0

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {

      let bookList = responseJson.results.lists[2].books;

      bookList.forEach(element => {
        let bookTitle = element.title
        let bookAuthor = element.author
        let bookDescription = element.description
        let imgUrl = element.book_image;
        counter++
        document.getElementById(`book-title${counter}`).innerText = (`${bookTitle} by ${bookAuthor} - ${bookDescription}`);
        document.getElementById(`book-img${counter}`).src = imgUrl;
      });
    });
});
