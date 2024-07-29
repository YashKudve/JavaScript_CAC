class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email, password){

        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user = new Teacher('user1','user1@g.com', '123455')
// console.log(user);
console.log(user.addCourse());