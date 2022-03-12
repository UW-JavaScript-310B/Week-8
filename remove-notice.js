// Reference "maintenance-notice".
const notice = document.getElementById("maintenance-notice");

///////////////////////////////////////////////////////////////////////////////

// 'none' display "maintenance-notice" after 5 seconds.
setTimeout(() => {
    notice.style.display = "none";
}, 5000);