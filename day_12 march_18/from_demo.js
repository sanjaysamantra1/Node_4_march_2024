let mySet = new Set();
mySet.add(10)
mySet.add(20)
mySet.add(30)
console.log(mySet);

let myArr = Array.from(mySet)
let res = myArr.map(ele => ele + 2);
console.log(res)