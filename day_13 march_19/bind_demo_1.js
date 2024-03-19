function add(a, b) {
    console.log(this.num + a + b); // this = window
}
add(2, 3); // NaN
let obj = { num: 4 };
add.call(obj, 2, 3); // inside add() , this = obj

let sum = add.bind(obj);
sum(2, 3);
sum(3, 4);
sum(4, 5);