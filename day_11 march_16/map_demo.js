let arr = [10, 20, 30, 40, 50];

let updatedArr = arr.map(ele => ele + 5);
console.log(arr, updatedArr);

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
];
// increase the salary of every employee by 500
let updatedEmployees = employees.map(emp=>{
    emp.sal = emp.sal+500;
    return emp;
});
console.log(updatedEmployees)