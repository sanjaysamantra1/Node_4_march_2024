// benefit of arrow function
class Employee {
    name = 'sanjay';
    add = 'bangalore';
    displayInfo1 = function () {
        console.log(this.name + "  " + this.add)
    }
    displayInfo2 = () => {
        console.log(this.name + "  " + this.add)
    }
}
let emp = new Employee();
emp.displayInfo1();
emp.displayInfo2();

let a = emp.displayInfo1;
// a();

let b = emp.displayInfo2;
b();

let c = b;
c()

