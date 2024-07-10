const mySym = Symbol()
const user = {
    name: 'user2',
    age:15,
    location:"Mumbai",
    [mySym]:"key5"

}

// console.log(user.name)
// console.log(user.age)

// console.table([user.name, user.age,user.location])

// console.log(mySym)
console.log(user[mySym])