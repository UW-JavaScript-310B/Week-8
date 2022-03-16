const backgroundColor = document.getElementsByTagName('body')[0];
let startingColor = 255;
const intervalTime = 100;
let countdownInterval = setInterval(function () {
    if (startingColor > 0) {
        backgroundColor.style.backgroundColor = `rgb(${startingColor}, ${startingColor}, ${startingColor})`;
        startingColor--;
    } else {
        clearInterval(countdownInterval);
    }
}, intervalTime);
