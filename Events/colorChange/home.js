const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color
}

// console.log(randomColor())

function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
}

const startColorChange = function(){
    setInterval(changeBgColor,1000,false)
}

const stopColorChange = function(){}

document.querySelector('#start').addEventListener('click', startColorChange)
document.querySelector('#stop').addEventListener('click', stopColorChange)