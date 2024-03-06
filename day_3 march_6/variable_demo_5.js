function varTest() {
    if (5 == 5) {
        var a = 10; // this variable is declared inside a block
        console.log('inside block', a)
    }
    console.log('outside block', a); // a variable shouldn't be accessible outside the block
}
varTest();

function letTest() {
    if (5 == 5) {
        let x = 10; // this variable is declared inside a block
        console.log('inside block', x)
    }
    console.log('outside block', x); // x is not visible outside the block
}
letTest();
