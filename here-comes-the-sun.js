let body = document.getElementsByTagName('body')[0];
const header = document.getElementsByTagName('h1')[0];
let x = 0;
let y = 255;
const hereComesTheSun = (x)=>{
   x++;
  y--;
    if(x<255 && y>= 0){
        body.style.backgroundColor = `rgb(${x},${x},${x})`
        header.style.backgroundColor = `rgb(${y},${y},${y})`
        
        requestAnimationFrame(hereComesTheSun)
    }

}
requestAnimationFrame(hereComesTheSun);