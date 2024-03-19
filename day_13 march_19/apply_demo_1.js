function add(a, b) {
    console.log(this.num + a + b);
}
add(2, 3); // NaN

let obj = { num: 4 };
add.call(obj, 2, 3); // 9

let arr = [2, 3]
add.call(obj, arr)
add.apply(obj, arr)