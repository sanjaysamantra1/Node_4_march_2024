let arr = ['Srinivas', 'Akash', 'Rajeev', 'Manoj'];

// 1. Loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log('=====================')

// 2. for-in
for (let i in arr) {
    console.log(i + "   " + arr[i])
}
console.log('=====================')

// 3. for-of
for (let ele of arr) {
    console.log(ele)
}
console.log('=====================')

//4. forEach()
arr.forEach((ele, ind, arr) => {
    console.log(ele, ind, arr)
})

arr.forEach(ele => console.log(ele));