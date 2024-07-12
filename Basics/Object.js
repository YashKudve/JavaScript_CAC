const mySym = Symbol()
const jsUser = {
    name: 'user2',
    age:15,
    location:"Mumbai",
    [mySym]:"key5"

}

// console.log(user.name)
// console.log(user.age)

// console.table([user.name, user.age,user.location])

// console.log(mySym)
// console.log(user[mySym])

jsUser.greeting = function(){
    console.log("Hello user")
}

console.log(jsUser.greeting)

let c = 400

if (true) {
    const a = 9
    let b = 0
    // let c = 10
    // console.log("value of c is: ",c)
}

function one(){
    let username= "Shivam"

    function two(){
        let email="yash@google.com"

        // console.log("Username is: ",username)
        // console.log("Email is: ",email)

    }

    // two()
}

// one()

