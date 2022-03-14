const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');


//const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists.json';

const BASE_URL = 'https://api.nytimes.com/svc/books/v3/';

const API_KEY ='mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'

//const url = `${BASE_URL}?q=fiction&api-key=${API_KEY}`;

//const url = `${BASE_URL}?author=Stephen+King&api-key=${API_KEY}`;

//const url = `${BASE_URL}lists/current/hardcover-fiction.json?api-key=${API_KEY}`;


formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;

  console.log(year)

  const month = monthEl.value;

  console.log(month)

  const date = dateEl.value;

  console.log(date)

  // Fetch bestselling books for date and add top 5 to page

  const url = `${BASE_URL}lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;

  //console.log('submit button clicked')

  fetch(url)
      .then(function(data) {
        //debugger
        return data.json();
      })
      .then(function(responseJson) {
        console.log(responseJson);

        // let article = responseJson.response.docs[0];
        // console.log(article);

        let book = responseJson.results.books[0].title
        console.log(book);

        //
        // const mainHeadline = article.headline.main;
        // document.getElementById('article-title').innerText = mainHeadline;
        //
        // if (article.multimedia.length > 0) {
        //   const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
        //   document.getElementById('article-img').src = imgUrl;
        // }
      });




});
