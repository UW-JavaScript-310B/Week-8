const bodyEl = document.getElementsByTagName('body')[0];

let colorVal = 255;
const interval = 500;

const bgColorDim = setInterval(() => {
    if (colorVal > 0 ) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        colorVal--;
    } else {
        clearInterval(bgColorDim);
    }

}, interval);