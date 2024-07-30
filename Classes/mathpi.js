const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

// const myObj = Object()

const chai = {
    name: 'Green tea',
    price: 200,
    isAvailable: true
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
