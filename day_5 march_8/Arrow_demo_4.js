// benefit of arrow function
class Employee {
    name = 'sanjay';
    greet1 = function () {
        console.log('Helllooo ', this.name)
        console.log(this)
    }
    greet2 = () => {
        console.log('Hiiiii ', this.name)
        console.log(this)
    }
}
let emp = new Employee();
emp.greet1(); // emp.greet1() , inside greet1() , this = emp object
emp.greet2(); // where it is written, inside Employee class , this = Emp

setTimeout( emp.greet1 , 2000 );
setTimeout( emp.greet2 , 4000 );
