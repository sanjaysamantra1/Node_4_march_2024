let arr1 = [10, 20];

let arr2 = arr1;  // Address Copy, a new array is not created, there is only 1 array 2 variables are pointing to the same array
arr2.push(30);
arr1.push(40);
console.log(arr1, arr2);


let arr3 = [10, 20];
let arr4 = arr3.slice() // this is not address copy, this is value copy
// let arr4 = [...arr3] // this is not address copy, this is value copy
arr3.push(30)
console.log(arr3, arr4)