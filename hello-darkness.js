let clrNumber = 255;

let countdownInterval = setInterval(() => {
    if (clrNumber > 0) {
        document.body.style.backgroundColor = `rgb(${clrNumber}, ${clrNumber}, ${clrNumber})`;
        clrNumber--;
    } else {
        clearInterval(countdownInterval);
    }
}, 500);