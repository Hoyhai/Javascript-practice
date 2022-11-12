let text: string = 'Hello Typescript'
let num: number = 10

interface User {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "Poo"
}

function getLength(obj: string | string[]) {
    return obj.length
}

console.log(getLength('Helllooos'))

// generic
function pair<S, T>(a: S, b: T): [S, T] {
    return [a, b]
}

console.log(pair<string, number>('hello', 10))

