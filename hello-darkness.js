
let newColor = 255;

let reduceColor = setInterval(function () {
    if (newColor > 0) {
        newColor--;
        let bodyColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
        document.body.style.backgroundColor = bodyColor;
    } else {
        clearInterval(reduceColor);
    }
}, 500
);



