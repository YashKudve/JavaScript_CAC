// const coding = [
//     {
//         languageName:"JavaScript",
//         languageFileName:'js',
//         colour:{
//             red:'red'
//         }
//     },
//     {
//         languageName:"Java",
//         languageFileName:'java',
//         colour:{
//             red:'red'
//         }
//     },
//     {
//         languageName:"Python",
//         languageFileName:'py',
//         colour:{
//             red:'orange'
//         }
//     },
// ]

// coding.forEach((item)=>(
//     // console.log(item.languageFileName)
//     // console.log(item.colour.red)
// ))

// const myNum = [1,2,3,4]
// const values = myNum.forEach((item)=>(
//     console.log('')
// ))

// console.log(values)
//*********IMPORTANT: for-each loop does not return any value***********

const myNums = [1,2,3,4,5,6,7,8,9,10]

const numbers = myNums.filter((number)=>(
    number>4
))

console.log(numbers)