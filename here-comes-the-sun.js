// Define const 'colorValue' starting from 0
let colorValue = 0;
// Get <body> element
const bodyEl = document.getElementsByTagName('body')[0];
// Set timeout for each frame. It will take 4s after showing 255 frames
const time = 4000/255;

const theSun = () => {
  // Increase colorValue by 1
  colorValue++;

  if (colorValue < 256) {
    setTimeout(() => {
      // Set background color of the body element
      bodyEl.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      // Animation
      requestAnimationFrame(theSun);
    }, time);
  }
};

requestAnimationFrame(theSun);