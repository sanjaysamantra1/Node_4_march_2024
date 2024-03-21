function test() {
    let a = 10;
    let b = 20;
    // return { a: a, b: b }
    return { a, b }
}
console.log(test())

function getLaptop(comp, model, year) {
    return {
        comp: comp,
        model: model,
        year: year
    }
}
console.log(getLaptop('Apple', 'MacBook', 2015))

function getEmployee(id, name, sal) {
    return { id, name, sal };
}
console.log(getEmployee(101, 'sanjay', 5000))