console.log(a); // undefined
var a = 10;

function f1(){
    console.log(a);  // 10
    a = 15;
    console.log(a); // 15
}
f1();