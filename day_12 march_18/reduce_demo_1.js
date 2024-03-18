let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((prev, cur) => {
    console.log(prev, cur)
    return prev + cur;
});
console.log(sum);


let str = 'Hello World';
let charsArr = str.split('');
let revStr = charsArr.reduce((prev, cur) => {
    return cur + prev;
});
console.log(revStr)