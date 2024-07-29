function SetUsername(){
    this.username = username;
}

function createUser(username, email, password){

    SetUsername(username)
    this.email = email;
    this.password = password
}

const user = new createUser('Yash','yash@gmail.com',123456)
console.log(user);