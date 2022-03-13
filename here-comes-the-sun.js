const body = document.getElementById('body');

let colorVal = 0;

// Lighten the body until it is white
const sunriseBody = () => {
    if (colorVal < 255) {
        colorVal++
        body.style.backgroundColor = 
            `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
            requestAnimationFrame(sunriseBody);
    }
};

sunriseBody();
