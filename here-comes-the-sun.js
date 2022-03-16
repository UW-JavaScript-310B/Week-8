const body = document.querySelector("body");
let colorValue = 0;

(function repeater() {
  colorValue++;
  body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue}`;
  if(colorValue >= 255) {
    return;
  }
  requestAnimationFrame(repeater);
})();
