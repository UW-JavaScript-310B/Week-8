const div = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName('h1')[0];

function darkness (){
    let x = 255;
    let y = 0;
const set = setInterval(()=>{
    if(x>0 && y<255){

        div.style.backgroundColor = `rgb(${x},${x},${x})`;
        header.style.color = `rgb(${y},${y},${y})`
        y++;
        x--;
    }
    else{
        clearInterval(set);
    }
},30)
}

darkness();