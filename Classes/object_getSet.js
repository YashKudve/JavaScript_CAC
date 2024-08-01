const User = {
    _email: 'yash@y.com',
    _password: 'yash123',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// Object.create is known as factory function
const user1 = Object.create(User)
console.log(user1.email);