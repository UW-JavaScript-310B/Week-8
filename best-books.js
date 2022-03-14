const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');


const BASE_URL = 'https://api.nytimes.com/svc/books/v3/';

const API_KEY ='mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  let divEl = document.getElementById('books-container');

  const year = yearEl.value;

  const month = monthEl.value;

  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page

  const url = `${BASE_URL}lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;

  fetch(url)
      .then(function(data) {
        //debugger
        return data.json();
      })
      .then(function(responseJson) {
        console.log(responseJson);

        //need to loop through the top five. id est, from element 0 to 4
        //need to create the elements dynamically

        // let book = responseJson.results.books[0].title
        // let author_ = responseJson.results.books[0].author
        // let description = responseJson.results.books[0].description
        // let book_img = responseJson.results.books[0].book_image
        // let book_link = responseJson.results.books[0].amazon_product_url
        // document.getElementById('book-title').innerText = book;
        // document.getElementById('book-author').innerText = author_;
        // document.getElementById('book-snippet').innerText = description;
        // document.getElementById('book-link').href=book_link
        // if (book_img.length > 0) {
        //   const imgUrl = book_img;
        //   document.getElementById('book-img').src = imgUrl;
        // }

        for (let counter=0; counter<5; counter++){

          let book = responseJson.results.books[counter].title
          let author_ = responseJson.results.books[counter].author
          let description = responseJson.results.books[counter].description
          let book_img = responseJson.results.books[counter].book_image
          let book_link = responseJson.results.books[counter].amazon_product_url
          const h1Elem = document.createElement('h1')
          const h2Elem = document.createElement('h2')
          const imgElem = document.createElement('img')
          const pElem = document.createElement('p')
          const aElem = document.createElement('a')

          if (book_img.length > 0) {
            const imgUrl = book_img;
            imgElem.src=imgUrl
            //document.getElementById('book-img').src = imgUrl;
          }

          h1Elem.innerText=book
          h2Elem.innerText=author_
          pElem.innerText=description
          aElem.href=book_link
          aElem.id="book-link"
          aElem.innerText="Amazon Link"

          divEl.append(h1Elem)
          divEl.append(h2Elem)
          divEl.append(imgElem)
          divEl.append(pElem)
          divEl.append(aElem)


        }

      });

});
