let myPromise = new Promise(function(resolve, reject) {
  let r = Math.random();
  setTimeout(function() {
    if (r > 0.5) {
      resolve(r);
    } else {
      reject(r);
    }
  }, 1000);
});

myPromise
  .then(function(r) {
    console.log(`success: number is ${r}`);
  })
  .catch(function(r){
    console.log(`fail: number is ${r}`);
  })
  .then(function(){
    console.log("Complete");
  })

