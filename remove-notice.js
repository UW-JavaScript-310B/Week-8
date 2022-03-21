const noticeTimeoutCallback = () =>
{
    const notice = document.getElementById('maintenance-notice')
    notice.classList.add('hidden')
}
let noticeTimeout = setTimeout(noticeTimeoutCallback, 5000)

