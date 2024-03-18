let str = 'entertainment';
let cahrsArr = str.split('');
let result = cahrsArr.reduce((obj, char) => {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    return obj;
}, {});
console.log(result); // { e:3 , n:2 , t:3 ...}