const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const showBooks = document.getElementById('books-container')

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const monthsList = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

  // Fetch bestselling books for date and add top 5 to page
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json`;

  const url = `${BASE_URL}?&api-key=${API_KEY}`;
    //  debugger;
  
  //display date searched
  const displayTitle = document.createElement("h2");
      const monthAsNum = (Number(month)-1);
      const monthName = monthsList[monthAsNum];
        displayTitle.innerHTML = `Hardcover fiction bestsellers for ${monthName} ${date}, ${year}`
      showBooks.appendChild(displayTitle);

  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {
      console.log(responseJson);
      
     const bookList = responseJson.results.books.slice(0,5);
     
      for (let index = 0; index < bookList.length; index++) {
        const book = bookList[index];

        const mainDiv = document.createElement('div');
          mainDiv.className = "row col-12 pb-3";
        
        const imageDiv = document.createElement('div');
          imageDiv.className = "col-6";
               const img = new Image(200,200);
          img.src = book.book_image
        imageDiv.appendChild(img);
          mainDiv.appendChild(imageDiv);

        const bookDiv = document.createElement('div');
         bookDiv.className = "col-6 p-3";
       
         const bookSpan = document.createElement('div')
          bookSpan.className = "h4 font-italic";
          title = book.title;
         bookSpan.innerHTML = title;
         
         const authorSpan = document.createElement('span');
            authorSpan.className = "h6";
            authorSpan.innerHTML = `by ${book.author}`;

          const descDiv = document.createElement('div');
            descDiv.innerHTML = book.description;  
        
         bookDiv.appendChild(bookSpan);
         bookDiv.appendChild(authorSpan);
         bookDiv.appendChild(descDiv);

       //   showBooks.appendChild(imageDiv);
          showBooks.appendChild(mainDiv);
          mainDiv.appendChild(imageDiv);
          mainDiv.append(bookDiv);        
        
      }

      //take my book list array - iterate and display these books//
  
      //const mainHeadline = article.headline.main;
      //document.getElementById('books-container').innerText = mainHeadline;
  
      //if (article.multimedia.length > 0) {
       // const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
        //document.getElementById('article-img').src = imgUrl;
      //}
    });
  



});
