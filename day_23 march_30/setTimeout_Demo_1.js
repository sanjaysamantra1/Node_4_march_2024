function f1() {
    console.log('I am f1...')
}
setTimeout(f1, 2000);

function add(a, b) {
    console.log(a + b)
}
setTimeout(add, 3000, 10, 20);

