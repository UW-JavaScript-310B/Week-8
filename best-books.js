const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

const populateBooks = (fetchReturn) =>
{
  const books = fetchReturn.results.lists[0].books
  for (i = 0; i < books.length; i++)
  {
    const divEl = document.createElement('div')
    const pElTitle = document.createElement('p')
    pElTitle.innerText = `Title: ${books[i].title}`
    const pElAuthor = document.createElement('p')
    pElAuthor.innerText = `Title: ${books[i].author}`
    const pElDesc = document.createElement('p')
    pElDesc.innerText = `Title: ${books[i].description}`
    divEl.appendChild(pElTitle)
    divEl.appendChild(pElAuthor)
    divEl.appendChild(pElDesc)
    const bookContainerEl = document.getElementById('books-container')
    bookContainerEl.appendChild(divEl)
  }
}

formEl.addEventListener('submit', function(e)
{
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  let nytBaseUrl = 'https://api.nytimes.com/svc/books/v3/lists/'
  let dateStr = `${year}-${month}-${date}`
  let nytList = 'overview.json?api-key='

  let nytUrl = `${nytBaseUrl}${nytList}${ApiKey}&published_date=${dateStr}`

  console.log(nytUrl)

  let result = fetch(nytUrl).then((data) =>
  {
    console.log(data)
    return data.json()
  }).then(populateBooks)

});

