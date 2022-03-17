
let newColor = 0;

let changeColor = function() {
    if (newColor < 255) {
        newColor++;
        let bodyColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
        document.body.style.backgroundColor = bodyColor;
        requestAnimationFrame(changeColor);
    }
}
requestAnimationFrame(changeColor);
