// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task complete");
//         resolve() //due to this .then executes
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

// *************Another method for promise***********

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("Async Task 2");
//     resolve()
//     },1000)
// }).then(function(){
//     console.log('Async2 resolved');
// })


// ************ Promise 3 ***********
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Yash", email:'yash@google.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// **************** Promise 4 ****************

// const promiseFour = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error = true;

//         if (!error) {
//             resolve({username:'ABC', password:"123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>console.log('The promise is either resolved or rejected...'))

// *********** Promise 5 ******************

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username:'JavaScript', password:'1234'})
//         } else {
//             reject("Something went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// ********************************************

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

// *********another method to do above task*****

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>console.log(data))
.catch((err)=>console.log(err))