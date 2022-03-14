const body = document.getElementById('body');
let colorVal = 0;

const lighten = () => {
    if (colorVal < 255) {
        colorVal++
        body.style.backgroundColor = 
            `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
            requestAnimationFrame(lighten);
    }
};

lighten();