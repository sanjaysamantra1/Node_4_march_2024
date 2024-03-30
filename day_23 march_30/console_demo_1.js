console.log('Hellooooooo')
console.warn('Hellooooooo')
console.error('Hellooooooo')

console.time('sum');
let sum = 0
for (let i = 1; i <= 1000; i++) {
    sum = sum + i;
}
console.log(sum)
console.timeEnd('sum');

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
];
console.log(employees)
console.table(employees,['name','sal'])