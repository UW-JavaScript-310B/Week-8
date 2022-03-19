let colorVal = 0;

const bgColorLighten = () => {
  if (colorVal < 255) {
    colorVal++;
    document.body.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
    requestAnimationFrame(bgColorLighten);
  } else {
    cancelAnimationFrame(bgColorLighten);
  }
};

bgColorLighten();
