// Reference <body>.
const body = document.getElementsByTagName("body")[0];
// Set initial body brightness to minimum.
let bodyBrightness = 0;

// brighten ///////////////////////////////////////////////////////////////////
// 
const brighten = () => {
    if (bodyBrightness < 255) {
        bodyBrightness++;
        body.style.backgroundColor = 
            `rgb(${bodyBrightness}, ${bodyBrightness}, ${bodyBrightness})`;
            requestAnimationFrame(brighten);
    }
}

///////////////////////////////////////////////////////////////////////////////

requestAnimationFrame(brighten);