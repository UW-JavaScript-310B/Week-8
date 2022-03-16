let bodyEl = document.getElementsByTagName('body')[0];
let colorVal = 0;

let gHarrison = function () {
    if (colorVal >= 0) {
        bodyEl.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        colorVal += 1;
        requestAnimationFrame(gHarrison);
    };
};

requestAnimationFrame(gHarrison);

setTimeout(() => {
    let videoWrapper = document.createElement("div");
    videoWrapper.style.color = "black";
    let videoTextEl = document.createElement("p");
    let videoText = document.createTextNode(`I couldn't resist...again`);
    videoTextEl.appendChild(videoText);
    videoWrapper.appendChild(videoTextEl);
    let iFrame = document.createElement('iframe');
    iFrame.src = "https://player.vimeo.com/video/241072365?h=661418024f";
    iFrame.title = "Easter Egg #2.";
    iFrame.frameborder = '0';
    iFrame.allow = 'autoplay; fullscreen; picture-in-picture';
    iFrame.setAttribute('allowfullscreen', '');
    iFrame.style.width = '640px';
    iFrame.style.height = '480px';
    videoWrapper.appendChild(iFrame);
    bodyEl.appendChild(videoWrapper);
}, 5000);