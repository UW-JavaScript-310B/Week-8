const bodyEl = document.getElementsByTagName('body')[0];

let number = 255;
const interval = 100;

    
const dimCountDown = setInterval(() => {
    if (number > 0) {
    bodyEl.style.backgroundColor = `rgb(${number}, ${number}, ${number})`;
    number--;    
    } else {
        clearInterval(dimCountDown);
    }
}, interval);

