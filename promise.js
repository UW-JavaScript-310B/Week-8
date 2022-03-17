let myPromise = new Promise(function(resolve, reject) {
  const randNumb = Math.random();
  setTimeout(function() {
    if (randNumb > 0.5) {
    resolve(randNumb);
    } else {
      reject(randNumb);
    }
  }, 1000);
});

myPromise
  .then(function(num) {
    console.log(`success: number is ${num}`);
  })
  .catch(function(num) {
    console.log(`fail: number is ${num}`);
  })
  .then(() => {
    console.log('complete')
  })

