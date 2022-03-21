// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 

const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }

    const newUrl = document.getElementById(`article-link`);
    newUrl.href = `${article.web_url}`;

    const newSnippet = document.getElementById(`article-snippet`);
    const strSnippet = document.createTextNode(`${article.snippet}`);
    newSnippet.appendChild(strSnippet); 

    const newAuth = document.getElementById(`article-author`);
    const strAuth = document.createTextNode(`${article.byline.original}`);
    newAuth.appendChild(strAuth);
  });

  console.log(API_KEY);