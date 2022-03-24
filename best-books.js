$(document).ready(function () {

  const formEl = document.getElementById('best-books-form');

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const yearEl = document.getElementById('year');
    const monthEl = document.getElementById('month');
    const dateEl = document.getElementById('date');

    const year = yearEl.value;
    const month = monthEl.value;
    const date = dateEl.value;

    const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json`;
    const url = `${BASE_URL}?api-key=${API_KEY}`;

    $('.book').remove();
    fetch(url)
      .then(function (data) {
        return data.json();
      })
      .then(function (responseJson) {

        var booksArray = responseJson.results.books.slice(0, 5);
        booksArray.reverse().forEach((item) => {
          console.log(`${item.title} - ${item.author} - ${item.description}`);

          $('#books-container').after(`<div class='book' style='border:1px solid lightgrey;padding:10px;margin:10px'><h4>Title : ${item.title}</h4><h6>Author : ${item.author}</h6><p>${item.description}</p></div>`);
        });
      });
  });
});
