const body = document.querySelector("body");

let colorValue = 255;

setInterval(() => {
  body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  colorValue -= 1;
  if(red < 0) { clearInterval() }
}, 500);