// Reference <body>.
const body = document.getElementsByTagName("body")[0];
// Set initial body brightness to max.
let bodyBrightness = 255;

// darken /////////////////////////////////////////////////////////////////////
// Darkens <body> background every half-second till fully dark.
const darken = setInterval(() => {
    if (bodyBrightness > 0) {
        bodyBrightness--;
        body.style.backgroundColor = 
            `rgb(${bodyBrightness}, ${bodyBrightness}, ${bodyBrightness})`;
    } else {
        clearInterval(darken);
    }
}, 500);

///////////////////////////////////////////////////////////////////////////////

darken();