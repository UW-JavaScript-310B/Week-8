



let myPromise = new Promise(function(resolve, reject) {
  let num = Math.random();
  setTimeout(function() {
    if(num>0.5){
      resolve(num);
    }else{
      reject(num)
    }
    
  }, 1000);
});

myPromise
  .then(function(num) {
    console.log(`success number is ${num}`)
  })
  .catch(function(num) {
    console.log(`fail num is ${num}`)
  }).then(()=>{
    console.log("complete");
  })

