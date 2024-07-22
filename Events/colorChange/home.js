const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color
}

// console.log(randomColor())

const startColorChange = function(){}
const stopColorChange = function(){}

document.querySelector('#start').addEventListener('click', startColorChange)
document.querySelector('#stop').addEventListener('click', stopColorChange)