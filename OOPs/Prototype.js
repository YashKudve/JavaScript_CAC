// let myName = 'Yash   '
// console.log(myName.length);
// console.log(myName.trueLength());

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.yash = function(){
    console.log(`Yash is present in all objects`);
}

Array.prototype.heyYash = function(){
    console.log('HELLO YASH');
}

heroPower.yash()

myHeros.heyYash()