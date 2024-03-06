var a = 10;

function test() {
    var a = 15;
    console.log('inside function ', a);
}
test();

console.log('outside function ', a)