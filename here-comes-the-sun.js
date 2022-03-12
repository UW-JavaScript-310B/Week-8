// Reference <body>.
const body = document.getElementsByTagName("body")[0];
// Set initial body brightness to minimum.
let bodyBrightness = 0;

// brighten ///////////////////////////////////////////////////////////////////
// Gradually brightens <body>'s background color till it's white.
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