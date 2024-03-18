let arr = [10, 20, [30, 40, [50, 60, [70, 80, [90]]]]];
console.log(arr.length);

console.log(arr.flat()); // flat 1 level
console.log(arr.flat(2)); // flat 2 level
console.log(arr.flat(Infinity)); // flat n level

function flatArr(arr, depth = 1) {
    let result = [];
    for (ele of arr) {
        if (Array.isArray(ele) && depth > 0) {
            result.push(...flatArr(ele, depth - 1))
        } else {
            result.push(ele);
        }
    }
    return result;
}
let flatRes = flatArr(arr, 4);
console.log(flatRes);