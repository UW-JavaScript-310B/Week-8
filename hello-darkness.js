const decrementColorString = (colorStr) =>
{
    let colorNums = colorStr.substring(4, colorStr.length - 1)
    let nums = colorNums.split(', ')
    let newNums = ''
    for (i = 0; i < nums.length; i++)
    {
        if (i > 0)
        {
            newNums += ', '
        }
        nums[i]--;
        newNums += nums[i]
    }
    return `rgb(${newNums})`
}

const fadeBackgroundToBlack = () =>
{
    const bodyEl = document.getElementsByTagName('body')[0]
    let bgColor = bodyEl.style.backgroundColor
    bodyEl.style.backgroundColor = decrementColorString(bgColor)
    if (bodyEl.style.backgroundColor === 'rgb(0, 0, 0)')
    {
        clearInterval(darkenInterval)
    }
    console.log(bodyEl.style.backgroundColor)
}

let darkenInterval = setInterval(fadeBackgroundToBlack, 500)