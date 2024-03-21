class Person {
    constructor(name, age, add) {
        this.name = name;
        this.age = age;
        this.add = add;
    }
}
class Employee extends Person {
    constructor(name, age, add, eid, sal) {
        super(name, age, add); // to call parent's constructor
        this.eid = eid;
        this.sal = sal;
    }
}
class Student extends Person {
    constructor(name, age, add, roll, grade) {
        super(name, age, add); // to call parent's constructor
        this.roll = roll;
        this.grade = grade;
    }
}
let emp1 = new Employee('srinivas', 35, 'bangalore', 101, 5000);
let std1 = new Student('akshay', 25, 'hyd', 1, 7);

console.log(emp1)
console.log(std1)
