class User{
    constructor(username){
        this.username = username
    }

    static createId(){
        return `123`
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`)
    }
}

const user = new User("User1")
// console.log(user.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','i@phone.com')
// console.log(iphone);
iphone.logMe()