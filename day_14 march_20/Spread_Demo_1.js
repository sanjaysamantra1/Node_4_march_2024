/* 
Rest Parameter    ...
Spread Operator   ... 
*/

/* 
inside function argument, if ... is present , rest parameter
rest of the places , spread 
while invoking a function, ... its spread
*/

let arr = [10, 20, 30, 40, 40]
console.log(Math.max(...arr));

let arr2 = [10,20,30];
let arr3 = [40,50]
arr2.push(...arr3);
console.log(arr2)