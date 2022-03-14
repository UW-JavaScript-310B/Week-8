
const bodyEl = document.getElementsByTagName('body')[0];
let colorVal = 255;
const interval = 100

const changeColor = setInterval(() => {
    if (colorVal > 0) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        colorVal--
    } else {
        clearInterval(changeColor);
    }
}, interval);