const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const container = document.getElementById('books-container');

const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`;
const key = `?&api-key=${API_KEY}`;

// fetch(`${BASE_URL}${year}-${month}-${date}/hardcover-fiction.json${key}`)
// .then(data => data.json())
// .then(response => {
//   console.log(response);
//   response.results.books.forEach(book => {
//     let title = document.createElement('p');

//     title.innerText = `Title: ${titleCase(book.title)}`;
//     container.appendChild(title);

//     let author = document.createElement('p');
//     author.innerText = `Author: ${titleCase(book.author)}`;
//     container.appendChild(author);

//     let description = document.createElement('p');
//     description.innerText = `Description: ${sentenceCase(book.description)}`;
//     container.appendChild(description);
//   })
// });

function titleCase(str) {
  return (str.toLowerCase().split(' ')).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function sentenceCase(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
}

const reviews = document.getElementsByClassName('review');

fetch('https://randomuser.me/api/?results=3')
.then(data => data.json())
.then(response => {
  response.results.forEach((person, index) => {
    console.log(person);
    const photo = document.createElement('img');
    photo.src = person.picture.medium;
    reviews[index].prepend(photo);

    const name = document.createElement('h4');
    name.innerText = `${person.name.first} ${person.name.last}`;
    reviews[index].append(name);
  })
});
