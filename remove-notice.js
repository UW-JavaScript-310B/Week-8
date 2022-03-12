const notice = document.getElementById("maintenance-notice");
setTimeout(() => {
    notice.style.display = "none";
}, 5000);


let secondsRemaining = 15;

let countdownInterval = setInterval(() => {
    if (secondsRemaining > 0) {
        secondsRemaining--;
        console.log(secondsRemaining);
    } else {
        clearInterval(countdownInterval);
    }
}, 1000);