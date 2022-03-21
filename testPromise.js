let p = new Promise((resolve, reject) => {
  if (x > 10) {
    message = "This was a success!!!";
  } else {
    message = "This was a failure";
  }
});

p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
