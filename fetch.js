// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    let articleEl = document.getElementById("article-link");
    web_url = article.web_url;
    articleEl.setAttribute("href", web_url);
    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById("article-img").src = imgUrl;
    }

    let container = document.getElementsByClassName("container")[0];
    let snippet = article.snippet;
    let snippetDiv = document.createElement("div");
    container.appendChild(snippetDiv);
    snippetDiv.innerText = snippet;
    let leadParagraphDiv = document.createElement("div");
    container.appendChild(leadParagraphDiv);
    leadParagraphDiv.innerHTML = article.lead_paragraph;
  });
