let cars = ['toyota', 'audi', 'maruti', 'honda']
console.log(cars.sort());

let marks = [10, 50, 30, 20, 40];
console.log(marks.sort((a,b)=>b-a));

let arr = [10, 9, 91, 102, 92, 105, 8, 7];
console.log(arr.sort()); // Not Number sort , String sort

// Numeric Sort , Asc
console.log(arr.sort((a, b) => a - b));

// Numeric Sort , Desc
console.log(arr.sort((a, b) => b - a));