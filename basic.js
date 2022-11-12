// variables
let a = 5
a = 10 // value of let can be changed
console.log(a)

const b = 5
// b = 10 value of const can not change 
console.log(b)

// operation
let x = 10
let y = 2
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y) // modulus
// console.log(x**y) // exponentiation
// console.log(x++) // x = x + 1
// console.log(x--) // x = x - 1

// data types
let n = 10 // number
let name = "pie" // string
let obj = {firstname: "foo", lastname: "bar"} // object
let fruits = ['apple', 'banana', 'grape'] // arrays
console.log(obj.firstname) // obj.property, firstname is property

// can stored function inside an object
const obj2 = {
    firstname: 'Dodo',
    lastname: 'gogo',
    // this is called method
    // normal function
    fullname: function() {
        return this.firstname + " " + this.lastname
    },
    // arrow fucntion
    square: (x, y) => {
        return x ** y
    }
}

let k = obj2
console.log(k)
console.log(k.fullname())
console.log(k.square(5,2))

// events from index.html (increment button)
let num = 0
const addNumber = () => {
    console.log('function called')
    num++
    document.getElementById('box').innerHTML = num
}

// some of string methods
let string = 'Hello World'
console.log(string.split('').reverse().join(''))
// 1. split 'Hello World' string to array
// 2. reverse the array
// 3. join them to one string


// string template
let s = 'POO'
let s2 = `text is ${s}` // use backtick ``
console.log(s2)

const myObj = {age: 1, address: 2, id: 3}
// normal
const age1 = myObj.age
const addr = myObj.address
const id1 = myObj.id
console.log(age1, 'age1')

// destructuring object
const {age, address, gg} = myObj
console.log(age, address, gg)
// result
// 1 2 undefined (the variable must be same as inside object)

// destructuring array
const array = [5, 4, 3, 2, 1]
const [aa, bb, cc, dd, ee] = array
console.log(aa, bb, cc, dd, ee)
// result
// 5 4 3 2 1


