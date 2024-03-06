var a = 10;
let b = 20;
const c = 30;

function f1() {
    var d = 40; // only visible to f1 function
    f = 60;
    console.log('This is f1...')
    console.log(`a value is `, a)
    console.log(`b value is `, b)
    console.log(`c value is `, c)
    console.log(`d value is `, d)
    console.log(`f value is `, f)
    // console.log(`e value is `, e)
}
function f2() {
    var e = 50;
    console.log('This is f2...')
    console.log(`a value is `, a)
    console.log(`b value is `, b)
    console.log(`c value is `, c)
    // console.log(`d value is `, d)
    console.log(`e value is `, e)
    console.log(`f value is `, f)
}
f1();
f2();