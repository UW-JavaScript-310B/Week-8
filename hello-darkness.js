$(document).ready(function () {

    let myFunc = function (color) {
        $('#element').css('background-color', color);
    }

    let x = 255;
    let countdownInterval = setInterval(function () {
        if (x > 0) {
            myFunc(`rgb(${x},${x},${x})`);
            x--;
        }
        else {
            clearInterval(countdownInterval);
            myFn('white');
        }
    }, 500
    );
});