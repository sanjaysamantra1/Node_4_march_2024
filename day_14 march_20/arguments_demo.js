function add() {
    sum = 0;
    for (ele of arguments) { // arguments is pre-defined keyword
        sum = sum + ele;
    }
    console.log(sum);
    console.log(Array.isArray(arguments))
}
add(2, 3)
add(2, 3, 4)
add(2, 3, 4, 5)