// for(i=1;i<=10;i++){
//     console.log(i)
// }

// for(i=1;i<=10;i++){
//     for(j=1;j<=10;j++){
//         console.log(i + "*" + j + "=" + i*j)
//     }
//     console.log('**************************************')
// }

// break statement

for (let index = 0; index < 11; index++) {
    console.log(`The number is ${index}`)

    if(index == 5){
        console.log("Number 5")
        break;
    }
    
}

// continue statement

for (let index = 0; index < 11; index++) {
    console.log(`The number is ${index}`)

    if(index == 5){
        console.log("Number 5")
        continue;
    }
    
}