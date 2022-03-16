const bodyEl = document.getElementsByTagName('body')[0];

let number = 0;
    
const brighter = function() {
    number++;    

    if (number <= 255) {
    bodyEl.style.backgroundColor = `rgb(${number}, ${number}, ${number})`;
        requestAnimationFrame(brighter);
        }
    }
        requestAnimationFrame(brighter);