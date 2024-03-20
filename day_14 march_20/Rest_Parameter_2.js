function add(...arr) {
    sum = 0;
    for (ele of arr) { 
        sum = sum + ele;
    }
    console.log(sum);
    console.log(Array.isArray(arr))
}
add(2, 3)
add(2, 3, 4)
add(2, 3, 4, 5)