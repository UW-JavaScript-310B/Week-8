// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json`;
const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;

console.log(url);

fetch(url)
.then(data => data.json())
.then(responseJson => {

  console.log(responseJson);
  
  let article = responseJson.results.lists;
  console.log(article);

  const mainHeadline = article.headline.main;
  document.getElementById('article-title').innerText = mainHeadline;

  if (article.multimedia.length > 0) {
    const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
    document.getElementById('article-img').src = imgUrl;
  }
});