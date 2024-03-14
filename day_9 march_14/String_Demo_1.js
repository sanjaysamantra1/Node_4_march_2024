let a = 'hello'; // string Literal
let b = new String('hello'); // string Object
let c = new String('hello'); // string Object

console.log(typeof a)
console.log(typeof b)

console.log(a == b); // true
console.log(b == c); // false