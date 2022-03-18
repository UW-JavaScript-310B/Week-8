const bg = document.getElementsByTagName('body')[0];

let values = 255;
let interval = 100;

let backgroundColorFunc = setInterval(function(){
if (values > 0 ){
    bg.style.backgroundColor = `rgb(${values} , ${values}, ${values} )`
    values--;
} else{
    clearInterval(backgroundColorFunc)
}
}, interval
);