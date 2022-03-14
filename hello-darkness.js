const bodyEl = document.getElementById('body');
let colorVal = 255;
const interval = 500;

const changeColor = setInterval(() => {
    if (colorVal > 0) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        colorVal--
    } else {
        clearInterval(changeColor);
    }
}, interval);

