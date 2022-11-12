class Num {
    private _val: number
    private _pow: number
    constructor(val: number) {
        this._val = val
        this._pow = 1
    }
    public set power(num: number) {
        this._pow = num
    }
    public get power(): number {
        return this._val ** this._pow
    }
    public square(): number {
        return this._val ** 2
    }
    public cube(): number {
        return this._val ** 3
    }
}

let x = new Num(5)
console.log(x.square())
console.log(x.cube())
x.power = 5
console.log(x.power) 