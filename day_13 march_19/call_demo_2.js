let obj1 = {
    a: 10,
    b: 20,
    add: function () {
        console.log(this.a + this.b);
    }
}
obj1.add();

let obj2 = {
    a: 100,
    b: 200
}
// obj2.add();
obj1.add.call(obj2);

let obj3 = {
    a: 1000,
    b: 2000
}
obj1.add.call(obj3)