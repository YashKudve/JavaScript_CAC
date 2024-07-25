const user = {
    username: 'Yash',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Username: ${this.username}`);
        // console.log(`Logged in:  ${this.loginCount}`);
        // console.log(this);
    }
}

console.log(user.getUserDetails());