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

  const bookContainer = document.getElementById('books-container');
  bookContainer.textContent = null;

  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json'
  const url = `${BASE_URL}?${year}-${month}-${date}&api-key=${API_KEY}`

  fetch(url)
    .then(function(data){
        return data.json()
    })
    .then(function(jsonData){
        let myEntry = jsonData.results.lists[2].books

        for (let i = 0; i < 5; i++) {
            // debugger;
            const bookEntry = document.createElement('div')
            bookEntry.setAttribute('class', 'book-entry');

            bookContainer.append(bookEntry);
            
            let bookImg = document.createElement('img');
            bookEntry.appendChild(bookImg);
            bookImg.setAttribute('src', myEntry[i].book_image);

            let bookTitle = document.createElement('h3');
            bookEntry.append(bookTitle);
            bookTitle.textContent = myEntry[i].title;

            let bookAuthor = document.createElement('p');
            bookEntry.appendChild(bookAuthor);
            bookAuthor.textContent = myEntry[i].author;
            
            let bookDesc = document.createElement('p');
            bookEntry.appendChild(bookDesc);
            bookDesc.textContent = myEntry[i].description;

            let entryBreak = document.createElement('br');
            bookEntry.appendChild(entryBreak);
        }
    })
});