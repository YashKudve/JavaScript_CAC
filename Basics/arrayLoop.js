// Array can be a list of element "or" a list of objects

// ["","",""]
// [{},{},{}]

// ***************************************for of loop**************************************

// let arr = [1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num)
// }

// let greeting = "Hello YASH"
// for (const greet of greeting) {
//     // console.log(greet)

//     if (greet==" ") {
//         break
//         continue
//     }
//     console.log(greet)
// }

// let country = ["India","Pakistan","Scotland","italy","Romania"]

// for (const place of country) {
//    console.log(place) 
// }


// ***************************for-in loop**************************************

const programming = ['java','python','ruby','swift','cpp']

for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
}


// *****************************for-each loop*********************************

const coding = ['java','python','ruby','swift','cpp']

// coding.forEach((item)=>(console.log(`The items in the list are: ${item}`)))

coding.forEach((item,index,arr)=>(
    console.log(item,index,arr)
    
))