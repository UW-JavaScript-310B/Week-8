const modal = document.getElementById('maintenance-notice');
const logTimeout = function(){
    console.log('timeout called');
    modal.style.display = 'none';
}
setTimeout(logTimeout,5000);
console.log('next line ');
