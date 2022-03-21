const bodyEl = document.getElementsByTagName('body')[0];

let colorVal = 0; 

const bgColorBright = (() => {
    if (colorVal < 255) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`
        colorVal++; 
        console.log(colorVal);
        requestAnimationFrame(bgColorBright);
    }
});

requestAnimationFrame(bgColorBright);