let str = 'This is String Class';

console.log(str.split('')); // [every character is an alament in the array]
console.log(str.split(' ')); // [4 words]
console.log(str.split('String')); // [2 words]
console.log(str.split('This')); // [ 2 words]
console.log(str.split('Class')); // [ 2 words]
console.log(str.split('abc')); // [ 1 words]