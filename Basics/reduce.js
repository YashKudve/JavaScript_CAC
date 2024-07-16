// let arr = [1,2,3,4]

// const total = arr.reduce((arr,currVal)=>{
//     console.log(`arr: ${arr}  and currVal: ${currVal}`);
//     return arr+currVal
// },0)

// // const total = arr.reduce((acc, currVal)=>(acc+currVal),0)

// console.log(total)


const shoppingCart = [
    {
        name:"JS course",
        price:599
    },
    {
        name:"Java course",
        price:999
    },
    {
        name:"React course",
        price:1599
    },
    {
        name:"Mobile Dev course",
        price:2499
    }
]

const cartTotal = shoppingCart.reduce((acc, item)=>{return acc + item.price},0)

console.log(cartTotal);