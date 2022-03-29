let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 1000);
  
});

myPromise
  .then(function() {
    return 99;
  })
  .then(function(number) {
    console.log(number);
  });


  let myPromiseTest = new Promise(function(resolve,reject){
    setTimeout(function(){
      
        const value = Math.random();
        try{
          if(value>0.5){
            resolve(console.log('success'));
          }
        }
        catch(e){
          reject(new Error(console.log('fail')));
        }
        return;
    },1000);
  });

  myPromiseTest
    .then(function(successMessage) {
      console.log('success')
   })
   .then(function() {
     console.log('complete');
  });


  // (async function() {
  //   try {
  //     const result = await Promise.all([myPromiseTest]);
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err)
  //   }
  
  // })();