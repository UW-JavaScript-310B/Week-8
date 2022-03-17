let myPromise = new Promise(function(resolve, reject) {
    const number = Math.random();
    setTimeout(function() {
        if(number > 0.5) {
            resolve(number);
        } else {
            reject(number);
        }
    }, 1000);
});

myPromise
  .then(function(number) {
      console.log(`success ... ${number}`);
  })
  .catch(function(number) {
      console.log(`fail ... ${number}`);
  })
  .then( () => {
      console.log('complete');
  })

