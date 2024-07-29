function SetUsername(username){
    this.username = username;
}

function createUser(username, email, password){

    // SetUsername(username)
    SetUsername.call(this,username)
    this.email = email;
    this.password = password
}

const user = new createUser('Yash Kudve','yash@gmail.com',123456)
console.log(user);