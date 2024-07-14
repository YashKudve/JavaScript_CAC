const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('UK',"United Kingdom")

// console.log(map)

// key-value destructuring
for (const [key, value] of map) {
    console.log(key ,'-->', value)
}