const randomColor = function(){
    const hex = '0123456789ABCDEF'
    const color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
}