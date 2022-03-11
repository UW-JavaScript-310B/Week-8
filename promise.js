// myPromise //////////////////////////////////////////////////////////////////
// Basic promise example.
// Generates a random number between 0 and 1:
//   if number is greater than .5, resolves;
//   rejects otherwise.
let myPromise = new Promise((resolve, reject) => {
  const randNum = Math.random();
  setTimeout(() => {
    if (randNum > ".5") {
      resolve(randNum);
    } else {
      reject(randNum);
    }
  }, 1000);
});

///////////////////////////////////////////////////////////////////////////////

// Occurs on resolve() of myPromise.
myPromise.then((number) => {
  console.log(`success: number is ${number}`);
  return 99;
})
// Catches, occurring on reject() of myPromise.
.catch((number) => {
  console.log(`fail: number is ${number}`);
})
// Occurs regardless of reject() or resolve().
.then((number) => {
  console.log("complete");
});

