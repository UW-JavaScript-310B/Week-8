let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const tempValue = Math.random();
    console.log(tempValue);
    if (tempValue > 0.5) {
      resolve("success");
    } else if (tempValue <= 0.5) {
      reject("fail");
    } else {
      reject("You should never get here");
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log("task completed with status of " + message);
  })
  .catch((message) => {
    console.log("task completed with status of " + message);
  });
