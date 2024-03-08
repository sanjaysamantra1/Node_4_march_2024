// Limitation of Arrow function, inside an object literal dont use arrow function, use regular function
let obj = {
    a: 10,
    b: 20,
    add: function () {
        console.log(this.a + this.b); // this = obj
        console.log(this)
    },
    mul: () => {
        console.log(this.a * this.b); 
        console.log(this); // this = {}
    }
}
obj.add();
obj.mul();