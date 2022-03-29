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

          $('#books-container').after(`<div class="card" style="display:grid;grid-template-columns: 15% 85%;padding:10px;margin:20px">` +
          `<div><img src="${item.book_image}" alt="img-text" style="width:100px"></img></div>` +
          `<div style="padding:15px 0px"><h5>Title: ${item.title}</h5>` +
          `<span>Author: ${item.author}</span><br/>` +
          `<span>Description: ${item.description}</span><br />` +
          `<span><a href="${item.amazon_product_url}" target="_blank">Buy on Amazon</a></span>` +
          `</div></div>`);

        });
      });
  });
});
