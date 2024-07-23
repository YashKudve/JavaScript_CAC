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

new Promise(function(resolve,reject){
    console.log("Async Task 2");
    resolve()
}).then(function(){
    console.log('Async2 resolved');
})