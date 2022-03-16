let body = document.body;
let startColorNum = 255;
const interval = 1000;

let darkenInterval  = setInterval(function() {
    if (startColorNum > 0)
    {
        body.style.backgroundColor = `rgb(${startColorNum},${startColorNum},${startColorNum})`;
        startColorNum--;
    }
    else{
        startColorNum = 255; 
        clearInterval(darkenInterval);
    }
}, interval);

darkenInterval;