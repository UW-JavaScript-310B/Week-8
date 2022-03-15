// Define const 'colorValue'
let colorValue = 255;
// Define const interval = 0.5 s
const interval = 500;
// Get <body> element
const bodyEl = document.getElementsByTagName('body')[0];

// Darken the body background color by 1 every 0.5 s
const helloDarken = setInterval(() => {
  if (colorValue > 0) {
    // Set background color of the body element
    bodyEl.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    colorValue--;
  } else {
    clearInterval(helloDarken);
  }
}, interval);