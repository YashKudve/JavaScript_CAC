// iife --> Immediately Invoked Function Expression

//this is used to run the function immediately in order to prevent it from global scope pollution.

// Below is normal function declaration
// const qwe = (employee) =>{
    //     console.log(`Meet me tomorrow, ${employee}`)
    // }
    
    // qwe('Amit');
    
    
    // ṭhis is given by-->   () ()

(function abc(){
    console.log("DB CONNECTED")
}) (); //this semi-colon is extremely important so as to inform where the function is ending.

( () =>{
    console.log('DB-2 CONNECTED')
} ) ();

( (name) =>{
    console.log(`Welcome ${name}`)
} ) ('Yash Kudve');