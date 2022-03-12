// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = 'VeXyZSUr0HSMfzzwXDlnMHrzX3sCffSq'
const dataInput = 'tech'
const url = `${BASE_URL}?q=${dataInput}&api-key=${API_KEY}`;

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

    const byLine = article.byline.original;
    document.getElementById('article-byline').innerText = byLine;

    const snippet = article.snippet;
    document.getElementById('article-snippet').innerText = snippet;
 
    const articleLink = article.web_url
    document.getElementById('article-link').href = articleLink;

  });
