 const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

const API_KEY = 'pVOgAehZw0GFSu8TPgZcXJYU6GGoxA0q';

const baseUrl = `https://api.nytimes.com/svc/books/v3/lists/`;
const url = `${baseUrl}?q=tech&api-key=${API_KEY}`;


const key = `?&api-key=${API_KEY}`;
formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  let bookData = fetch(`${baseUrl}${year}-${month}-${date}/hardcover-fiction.json${key}`)
  .then(data=>{
    return data.json();
  })
  .then(response=>{
   return response.results;
  }).then(res=>{
    list(res);
  })

  // Fetch bestselling books for date and add top 5 to page
});



const list = (res)=>{
  console.log(res)
 
 for(let i = 0;i<5;i++){
  let ul = document.createElement('ul');
    ul.innerHTML = `
      <li>${res.books[i].title}</li>
      <ul>
      <li>Author: ${res.books[i].author}</li>
        <li>Description: ${res.books[i].description}</li>
        <img src="${res.books[i].book_image}">
      </ul>

    `
    document.getElementById('books-container').append(ul);   
 }
 
}