document.addEventListener("DOMContentLoaded", function() {

const baseURL = `https://api.nytimes.com/svc/books/v3/lists/`;
let srchBtn = document.getElementById('srchBtn');
let dateField = document.getElementById('date');
let date = '';
let apiKey = '';
let url = `${baseURL}${date}/hardcover-fiction.json?api-key=${apiKey}`;


const leGrandeFunction = (function(e) {
    e.preventDefault();
    date = dateField.value;
    console.log(date);

    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((resultsJson) => {
            // Should have used a loop to generate. Missed opportunity.
            document.getElementById('result-one-title').innerText = resultsJson.results.books[0].title;
            document.getElementById('result-one-author').innerText = resultsJson.results.books[0].author;
            document.getElementById('result-one-descr').innerText = resultsJson.results.books[0].description;
            /**
             * Requirements state "Extra Credit 1 pt: For Bestselling Books, 
             * also display the image for each book". Since all the books are 
             * best-selling (per https://developer.nytimes.com/docs/books-product/1/overview), 
             * they all get a photo.
             * let oprah = (() => {
             *      let counter = 0;
             *      if (counter < 2) {
             *          console.log(`You get a photo!`);
             *          counter++;
             *      } else {
             *          console.log(`EVERYONE GETS A PHOTO!!!`);
             *      }
             * })
             */
            document.getElementById('result-one-photo').setAttribute('src', resultsJson.results.books[0].book_image);

            document.getElementById('result-two-title').innerText = resultsJson.results.books[1].title;
            document.getElementById('result-two-author').innerText = resultsJson.results.books[1].author;
            document.getElementById('result-two-descr').innerText = resultsJson.results.books[1].description;
            document.getElementById('result-two-photo').setAttribute('src', resultsJson.results.books[1].book_image);

            document.getElementById('result-three-title').innerText = resultsJson.results.books[2].title;
            document.getElementById('result-three-author').innerText = resultsJson.results.books[2].author;
            document.getElementById('result-three-descr').innerText = resultsJson.results.books[2].description;
            document.getElementById('result-three-photo').setAttribute('src', resultsJson.results.books[2].book_image);

            document.getElementById('result-four-title').innerText = resultsJson.results.books[3].title;
            document.getElementById('result-four-author').innerText = resultsJson.results.books[3].author;
            document.getElementById('result-four-descr').innerText = resultsJson.results.books[3].description;
            document.getElementById('result-four-photo').setAttribute('src', resultsJson.results.books[3].book_image);

            document.getElementById('result-five-title').innerText = resultsJson.results.books[4].title;
            document.getElementById('result-five-author').innerText = resultsJson.results.books[4].author;
            document.getElementById('result-five-descr').innerText = resultsJson.results.books[4].description;
            document.getElementById('result-five-photo').setAttribute('src', resultsJson.results.books[4].book_image);
        });
});
srchBtn.addEventListener("click", leGrandeFunction, true);
});