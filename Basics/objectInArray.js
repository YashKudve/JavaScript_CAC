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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const numbers = myNums.filter((number)=>(
//     number>4
// ))

// console.log(numbers)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [
    {
        title:"Book1",
        genre:"Sci-Fi",
        publish: 2000,
        edition: 2004
    },
    {
        title:"Book2",
        genre:"Comic",
        publish: 2010,
        edition: 2015
    },
    {
        title:"Book3",
        genre:"Sci-Fi",
        publish: 2010,
        edition: 2019
    },
    {
        title:"Book4",
        genre:"Comic",
        publish: 1995,
        edition: 2001
    },
    {
        title:"Book5",
        genre:"History",
        publish: 1985,
        edition: 2003
    },
    {
        title:"Book6",
        genre:"Geography",
        publish: 2020,
        edition: 2023
    },
    {
        title:"Book7",
        genre:"Sci-Fi",
        publish: 2006,
        edition: 2016
    },
    {
        title:"Book8",
        genre:"Geography",
        publish: 2009,
        edition: 2019
    },
]

const useBooks = books.filter((bk)=>(
    bk.genre === 'Comic'
))

console.log(useBooks)

const published = books.filter((pb)=>(
    pb.publish >= 2010
))

console.log(published)