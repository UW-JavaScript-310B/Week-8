let myPromise = new Promise(function(resolve, reject) {
  const randomNum = Math.random();
  
  setTimeout(function() {
    if (randomNum > 0.5) {
      resolve(randomNum);
    } else {
      reject(randomNum);
    }

  }, 1000);
});

myPromise
  .then(function(num) {
    console.log(`success number is ${num}`);
  })
  .catch(function(num) {
    console.log(`fail number is ${num}`);
  })
  .then(function() {
    console.log("complete");
  });

