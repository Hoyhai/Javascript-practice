let str = 'Hello Javascirpt world'
console.log(str.indexOf('Hello')) // from left to right = 0 [H]ello
console.log(str.lastIndexOf('l')) // from right to left

console.log(str.match('world')) // .index = property, .index() = method
// result is object, so i use .index property to specific what i need is index
console.log(str.match('world').index) 
// can use for search bar
console.log(str.includes('worl')) // check if 'worl' in str then return true