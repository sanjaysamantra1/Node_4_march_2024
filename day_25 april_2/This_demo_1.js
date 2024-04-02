console.log(this);
console.log(module.exports);

function f1() {
    console.log(this); // this = global object
}
f1();

let f2 = () => {
    console.log(this, ' arrow function'); // this = {}
}
f2();