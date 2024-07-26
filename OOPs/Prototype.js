// // let myName = 'Yash   '
// // console.log(myName.length);
// // console.log(myName.trueLength());

// let myHeros = ['thor', 'spiderman']

// let heroPower = {
//     thor:'hammer',
//     spiderman:'sling',

//     getSpiderPower: function(){
//         console.log(`Spiderman power is ${this.spiderman}`);
//     }
// }

// Object.prototype.yash = function(){
//     console.log(`Yash is present in all objects`);
// }

// Array.prototype.heyYash = function(){
//     console.log('HELLO YASH');
// }

// heroPower.yash()

// myHeros.heyYash()

const User = {
    username:"user",
    email:'user@gmail.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

// ***********

let anotherUser = 'UserTwo      '

String.prototype.getTrueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUser.getTrueLength()