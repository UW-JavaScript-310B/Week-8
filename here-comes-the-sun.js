$(document).ready(function () {

    var animationFrameId;
    var color = 0;

    var changeBackground = () => {
        if (color >= 255) {
            cancelAnimationFrame(animationFrameId);
            return;
        }

        color++;
        $('body').css('background-color', `rgb(${color}, ${color}, ${color})`);
        animationFrameId = requestAnimationFrame(changeBackground);
    };

    animationFrameId = requestAnimationFrame(changeBackground);
});