let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
];
// find the first male employee
let firstMaleEmp = employees.find(emp => emp.gender == 'male');
console.log(firstMaleEmp)

// find the last male employee
let lastMaleEmp = employees.findLast(emp => emp.gender == 'male');
console.log(lastMaleEmp)

// find the last male employee
let allMaleEmps = employees.filter(emp => emp.gender == 'male');
console.log(allMaleEmps);

// find the index of first female employee
let indexFirstFemale = employees.findIndex(emp => emp.gender == 'female')
console.log(indexFirstFemale)