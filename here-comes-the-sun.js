const bg = document.getElementsByTagName('body')[0];

let values = 1;
let bgColor = bg.style.backgroundColor;

console.log(bgColor);

let x= 0; 

function animation() {
    x++
    console.log(x);
    if(x >= 254){
        console.log('end');
        return;
    }else{
        bg.style.backgroundColor = `rgb(${x}, ${x}, ${x})`
        requestAnimationFrame(animation);
    }

};

requestAnimationFrame(animation);