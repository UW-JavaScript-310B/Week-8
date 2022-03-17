// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const API_KEY = '9PQ46JC0RXhkMuVMTY0AcKECLY6qpqm1'

const url = `${BASE_URL}/lists/names.json?api-key=${API_KEY}`;
  
  use.cors({Origin: *})
fetch(url)
  .then(function(data) {
    console.log(data.json)
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
  });
