const incrementColorString = (colorStr) =>
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
        nums[i]++;
        newNums += nums[i]
    }
    return `rgb(${newNums})`
}

const brightenBackgroundToWhite = () =>
{
    const bodyEl = document.getElementsByTagName('body')[0]
    let bgColor = bodyEl.style.backgroundColor
    bodyEl.style.backgroundColor = incrementColorString(bgColor)
    if (bodyEl.style.backgroundColor === 'rgb(255, 255, 255)')
    {
       clearInterval(brightenInterval)
    }
    console.log(bodyEl.style.backgroundColor)
}

let brightenInterval = setInterval(brightenBackgroundToWhite, 500)