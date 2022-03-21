const bodyEl = document.getElementsByTagName('body')[0];

let colorVal = 255; 
let interval = 500; 

const bgColorDim = setInterval(() => {
    if (colorVal > 0) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`
        colorVal--; 
    }
}, interval);