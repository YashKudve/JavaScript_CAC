const userOne = {
    name: "userOne",
    age:20,
    message: function(){
        console.log(`Dear ${this.name}, welcome onboard!`)
    }
}

userOne.message()

userOne.name="Yash"

userOne.message()
