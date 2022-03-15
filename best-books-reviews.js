const reviews = document.getElementsByClassName('review');

const randomUserPromise = fetch('https://randomuser.me/api/?results=3');
const loremBaconPromise = fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=3');

Promise.all([ randomUserPromise, loremBaconPromise ])
.then(() => {
  randomUserPromise
  .then(data => data.json())
  .then(response => {
    Array.from(reviews).forEach((review, index) => {
      const photo = document.createElement('img');
      photo.src = response.results[index].picture.medium;
      review.prepend(photo);

      const name = document.createElement('h4');
      name.innerText = `${response.results[index].name.first} ${response.results[index].name.last}`;
      review.append(name);
    })
  })

  loremBaconPromise
  .then(data => data.json())
  .then(response => {
    let loremText = response[0].split('. ');
    Array.from(reviews).forEach((review, index) => {
      const reviewText = document.createElement('p');
      reviewText.classList.add('mt-3', 'mb-3');
      reviewText.innerText = `"${loremText[index].trim()}."`;
      review.append(reviewText);
    })
  })
})
.catch((err) => console.log(err));
