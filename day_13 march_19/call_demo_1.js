function add(a, b) {
    console.log(this.num + a + b); // this = window
}
add(2, 3); // NaN
let obj = { num: 4 };
add.call(obj, 2, 3); // inside add() , this = obj


function sayHi() {
    console.log(`Hiiiiiiii ${this.name}`)
}
sayHi(); // inside sayHi() , this = window
let obj1 = { name: 'srinivas' };
sayHi.call(obj1);
let obj2 = { name: 'manjushree' };
sayHi.call(obj2);