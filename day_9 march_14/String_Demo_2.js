let str1 = '2+2';
let str2 = new String('2+2');

console.log(eval(str1)); // eval() can evaluate a string literal
console.log(eval(str2)); // eval() cann't evaluate a string Object

// convert string object to literal
let str3 = str2.valueOf();
console.log(eval(str3));