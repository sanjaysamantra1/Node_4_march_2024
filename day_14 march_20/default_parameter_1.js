function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    console.log(a + b + c);
}
add(2, 3)

// ES - 6 default parameter
function sum(a, b, c = 0) {
    console.log(a + b + c);
}
sum(2, 3)
sum(2, 3, 4)
