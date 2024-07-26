// const user = {
//     username: 'Yash',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         console.log(`Username: ${this.username}`);
//         console.log(`Logged in:  ${this.loginCount}`);
//         console.log(this);
//     }
// }

// console.log(user.getUserDetails());

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = User("Yash", 11 , true)
// const userTwo = User("ABC", 45 , true)

// console.log(userOne);

const userOne =new User("Yash", 11 , true)
const userTwo = new User("ABC", 45 , true)

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
