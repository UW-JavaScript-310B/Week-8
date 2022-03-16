let myPromise = new Promise(function (resolve, reject) {
  const randomNumber = Math.random();
  setTimeout(function () {
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject(randomNumber);
    }
  }, 1000);
});

myPromise
  .then(function (number) {
    console.log(`Resolve number: ${number}`);
  })
  .catch(function (number) {
    console.log(`Reject number: ${number}`);
  })
  .then(() => {
    console.log('Complete!');
  });

