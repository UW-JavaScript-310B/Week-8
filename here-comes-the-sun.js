const backgroundColor = document.getElementsByTagName('body')[0];
let startingColor = 000;
let animation = function () {
    if (startingColor < 255) {
        backgroundColor.style.backgroundColor = `rgb(${startingColor}, ${startingColor}, ${startingColor})`;
        startingColor++;
        requestAnimationFrame(animation);
    }
};

requestAnimationFrame(animation);
