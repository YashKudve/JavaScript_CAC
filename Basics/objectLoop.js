const myObject = {
    game1:'NFS',
    game2:"GTA",
    game3:'Geo-guesser'
}

// for-of loop (this cannot be used for objects)
// for (const game of myObject) {
//     console.log(game)
// }


// for-in loop(this is used for objects)

for (const key in myObject) {
    // console.log(key) --> this prints key
    // console.log(myObject[key]) --> this prints value

    console.log(`${key} ===> ${myObject[key]}`)
}
