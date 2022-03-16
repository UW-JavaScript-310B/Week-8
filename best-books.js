
// get holder of html elements
const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

//set variables for book type and api url
const list = 'hardcover-fiction';
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/';
//test api url
//const url = `https://api.nytimes.com/svc/books/v3/lists/2019-08-11/hardcover-fiction.json?api-key=raNlqadwfnyBqGVKOtCjSJXBQM6etu0n`;

//create event handler at form level to handle submit event
formEl.addEventListener('submit', async function (e) {
  e.preventDefault();
  //remove html elements before api call
  removeHTML();
  // build api url
  const url = buildApiUrl();
  //array to hold book result
  let results = [];
  // fetch result from api call
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      //get results from api call
      results = responseJson.results.books;
      //if books found then get first five books
      if (Array.isArray(results)) {
        results = getFiveBest(results);
        //build html table
        buildHTML(results);
      }
      //else display no book found msg
      else
        noDataFoundHTML();
    });
});
//this function remove all child elements of a div before an api call
function removeHTML()
{
  let div = document.getElementById('books-container');
  div.querySelectorAll('*').forEach(n => n.remove());
}
function noDataFoundHTML()
{
   //get a hook on div tag by id -  id="books-container"
   let div = document.getElementById('books-container');
   //create h3 node
   let h3 = document.createElement('h3');
   h3.innerHTML = 'No book found. Please try another date!';
   div.appendChild(h3);
}
//function to construct url for api call
function buildApiUrl() {
  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const inputDate = `${year}-${month}-${date}`;
  const urlStr = `${BASE_URL}${inputDate}/${list}.json?api-key=${API_KEY}`;

  return urlStr;
}
//function to return only first five best selling books
function getFiveBest(data) {
  const maxNumBookDisplay = 5;
  let bookResultArr = [];

  for (let i = 0; i < maxNumBookDisplay; i++) {
    bookResultArr[i] = data[i];
  }

  return bookResultArr;
}
//function to creete table header
function createTDHead() {
  const headerArr = ['Title', 'Author', 'Description', 'Image'];
  //create thead node
  let thead = document.createElement('thead');
  let row = thead.insertRow();
  for (let key of headerArr) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }

  return thead;
}
//function to create table body with data belongs 
//to the first five best selling books

function createTDBody(data) {
  //create tbody node
  let tbody = document.createElement('tbody');
  //loop through data array
  let size = 50;
  for (let i = 0; i < data.length; i++) {
    //create tr now
    let tr = document.createElement('tr');
    //create td for title
    let td1 = document.createElement('td');
    td1.innerHTML = data[i].title;
    //create td for author
    let td2 = document.createElement('td');
    td2.innerHTML = data[i].author;
    //create td for descritpion
    let td3 = document.createElement('td');
    td3.innerHTML = data[i].description;
    //crreate td for image
    let td4 = document.createElement('td');
    // create image tag
    let img = document.createElement('img');
    img.setAttribute('src', data[i].book_image);
    img.setAttribute('width', size);
    img.setAttribute('height', size);
    // append image tag to td tag
    td4.appendChild(img);
    // append tds to tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    //append tr to tbody
    tbody.appendChild(tr);
  }
  return tbody;
}
//
function buildHTML(data) {
  //get a hook on div tag by id -  id="books-container"
  let div = document.getElementById('books-container');
  //create h3 node
  let h3 = document.createElement('h3');
  h3.innerHTML = 'Top Five Best Sellers';
  //create table node
  let table = document.createElement('table');
  table.className = 'table table-striped';

  div.appendChild(h3);

  table.append(createTDHead());
  table.append(createTDBody(data));

  div.append(table);

} 
