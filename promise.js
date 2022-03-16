let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();

    if(randomNumber > 0.5) {
      resolve();
    }
    else {
      reject();
    }
  }, 1000);
});

myPromise
.then(() => console.log(`Success`))
.catch(() => console.log(`Failure`))
.then(() => console.log(`Complete`))
