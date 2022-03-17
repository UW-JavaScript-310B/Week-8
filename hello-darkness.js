/*
function logTimeoutCalled() {
  let x = 255;
  if (x >= 0) {
    x--;
    document.body.style.backgroundColor = "rgb(x, x, x)";
  } else {
      clearInterval();
    }
}

let myTimeout = setTimeout(logTimeoutCalled, 100);
clearTimeout(myTimeout);
function decreaseTime(secondsRemaining) {
    console.log(secondsRemaining);
    secondsRemaining--;
}
let secondsRemaining = 15;
// Change time remaining every 1 second
let countdownInterval = setInterval(decreaseTime(secondsRemaining), 1000);

*/
//TODO fix to your method
const bodyEl = document.getElementsByTagName("body")[0];

let colorVal = 255;
const interval = 100;

const bgColorDim = setInterval(() => {
  if (colorVal > 0) {
    bodyEl.style.backgroundColor = `rgb(${colorVal},${colorVal},${colorVal})`;
    colorVal--;
  } else {
    clearInterval(bgColorDim);
  }
}, interval);
