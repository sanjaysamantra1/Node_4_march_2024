console.log(Math.max(10, 20, 30, 40, 50));

let arr = [10, 20, 30, 40, 50];

console.log(Math.max(arr))
// Math.max() is expects individual numbers, not array of numbers
console.log(Math.max.apply({}, arr))

console.log(Math.max(...arr)); // Spread Operator - breaks an array to individual elements