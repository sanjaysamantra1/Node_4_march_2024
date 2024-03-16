let arr = [10, 20, 30];

arr.push(40);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(40);
console.log(arr);

arr.shift()
console.log(arr);

// splice(ind,#Ele to remove,element to insert)
arr.splice(1, 1, 15, 25); // [10,20,30]  [10,15,25,30]
console.log(arr);

arr.splice(1, 2, 20); // [10,15,25,30] [10,20,30]
console.log(arr);

arr.splice(2,0,25); // [10,20,30]  [10,20,25,30]
console.log(arr);

