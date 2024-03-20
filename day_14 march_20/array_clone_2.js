let arr1 = [10, 20];
let arr2 = arr1; // address copy
arr1.push(30);
console.log(arr1, arr2);

let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // value Copy , shallow copy
arr3.push(40);     // this will not impact arr4
arr3[2].push(32);  // this will  impact arr4
console.log('arr3 ', arr3);
console.log('arr4 ', arr4);
// shallow copy : only top level values are copied by value, inner arrays are copied by address


let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5); // value copy, Deep Copy
// Deep Copy - both top level & inner data are copied by value
arr5.push(40);
arr5[2].push(32);
console.log(arr5)
console.log(arr6)

