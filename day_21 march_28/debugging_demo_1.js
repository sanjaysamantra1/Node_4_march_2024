console.log('Program starts here...')
function f2() {
    console.log('f2 starts here');
    console.log('f2 continues');
    console.log('f2 ends here');
}
function f1() {
    console.log('f1 starts here');
    console.log('f1 continues');
    f2()
    console.log('f1 ends here');
}
f1();
console.log('Program ends here...')