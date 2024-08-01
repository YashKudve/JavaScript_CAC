class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
}

const yash = new User('yash@g.com', '1234')
console.log(yash.password);