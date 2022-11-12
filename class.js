class Num {
    constructor(val) {
        this.val = val
    }
    // setter
    set power(num) {
        this.pow = num
    }
    // getter
    get power() {
        return this.val ** this.pow
    }
    // method
    square() {
        return this.val * 2
    }
    cube() {
        return this.val ** 3
    }
}

let x = new Num(5)
console.log(x.cube()) // x ** 3

// set power setter to 6
x.power = 6 

// 1. call getter 
// 2. getter return x ** setter
console.log(x.power) 
console.log(5 ** 6)