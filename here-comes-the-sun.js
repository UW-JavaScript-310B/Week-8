let clrNumber = 0;

let animate = () => {
    if (clrNumber <= 255) {
        document.body.style.backgroundColor = `rgb(${clrNumber}, ${clrNumber}, ${clrNumber})`;
        clrNumber++;
        requestAnimationFrame(animate);
    }
};
requestAnimationFrame(animate);