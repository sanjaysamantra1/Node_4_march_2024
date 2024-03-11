// f1 is HigherOrder Function as it has ability to return another function
function f1() {
    console.log('I am f1...');
    return function f2() {
        console.log('I am f2...');
    }
}
let myFunc = f1()
myFunc();

let arr = [10, 11, 12, 13, 14, 15, 16, 17];
function even(ele) {
    return ele % 2 == 0;
}
let arr2 = arr.filter(even);  // filter() -HigherOrder , even() callback
console.log(arr2)

let salaryArr = [5000, 4000, 3000, 6000, 7000];
function increment(sal) {
    return sal + 500;
}
let updatedSal = salaryArr.map(increment);
console.log(updatedSal)