// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

// Search input for articles about 'cars'
const formInput = 'cars'

const url = `${BASE_URL}?q=${formInput}&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[1];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
    // Get the snippet from the article
    const snippet = article.snippet;
    document.getElementById('article-snippet').innerText = snippet;
    // Get the article link from the article
    const articleLink = article.web_url;
    // Set this link on the "Full Article" link
    document.getElementById('article-link').href = articleLink;
    // Get author's name of the article
    const author = `${article.byline.person[0].firstname} ${article.byline.person[0].lastname}`;
    // Get article category
    const category = article.type_of_material;
    // Create a new <p> element to show author's name & article category
    const para = document.createElement('p');
    para.innerHTML = `Author: ${author}; Category: ${category}`;
    // Add the para element into the page as a child of <div> container
    document.getElementsByClassName('container')[0].appendChild(para);
  });
