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

let myPromise2 = new Promise( function(resolve, reject)
{
  let rnd = Math.random()
  if (rnd > .5)
  {
    resolve()
  }
  else
  {
    reject()
  }
  console.log('complete')
})


const success = () =>
{
  console.log("success")
}

const fail = () =>
{
  console.log('fail')
}

myPromise2.then(success).catch(fail)

