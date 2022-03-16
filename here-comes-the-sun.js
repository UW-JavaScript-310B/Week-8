// initiate startColorNum
let startColorNum = 0;
// get a hook on body element
let body = document.body;
// function to light up the body element color
// using requestAnimationFrame for animation
const litUp = function () {
    if (startColorNum <= 255) {
        startColorNum++;
        body.style.backgroundColor = `rgb(${startColorNum},${startColorNum},${startColorNum})`;
        requestAnimationFrame(litUp);
    }

};

requestAnimationFrame(litUp);