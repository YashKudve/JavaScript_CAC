let arr = [1,2,3,4]

const total = arr.reduce((arr,currVal)=>{
    console.log(`arr: ${arr}  and currVal: ${currVal}`);
    return arr+currVal
},0)

// const total = arr.reduce((acc, currVal)=>(acc+currVal),0)

console.log(total)