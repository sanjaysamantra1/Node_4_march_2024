let a = 10;

// impure
function f1() {
    a = 12; // trying to update a variable from other scope
    console.log(a)
}
f1();

// impure - no return value
function add(a, b) {
    console.log(a + b)
}
add(2, 3);

// impure
function mul(x, y) {
    return a * 10;
}

// pure
function sub(a, b) {
    return a - b;
}
