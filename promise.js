let myPromise = new Promise((resolve, reject) => {
  // Set timeout 1s
  setTimeout(() => {
    // Get a random number
    const randomNo = Math.random();
    // If randomNo > 0.5 then call resolve()
    if (randomNo > 0.5) {
      resolve(`Success with random number is ${randomNo}`);
    } else {
      reject(`Fail with random number is ${randomNo}`);
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  })
  .then(() => {
    console.log('Complete!');
  });