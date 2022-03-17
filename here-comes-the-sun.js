const bodyEl = document.getElementsByTagName('body')[0];

let colorVal = 0;

const animate = () => {
    if (colorVal < 255 ) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        colorVal++;
    }
    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);