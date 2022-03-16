// create function myPromise
// after 1 second call Math.random()
let myPromise = new Promise(function (resolve, reject) {
  let randomNum = 0;
  setTimeout(function () {
    randomNum = Math.random();
    //evaluate randomNum
    if (randomNum > 0.5) {
      resolve('success');
    }
    else {
      reject('fail');
    }

  }, 1000);
});
// call myPromise
myPromise.then(
  function (value) {
    displayLog(value);
  },
  function (error) {
    displayLog(error);
  }

);
//function to display message
function displayLog(msg) {
  console.log(msg);
  console.log('complete');
}

