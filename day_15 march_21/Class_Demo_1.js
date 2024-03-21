function add(a, b) {   // function
    console.log(a + b)
};
add(2, 3);

// ES-5
function Trainer(name, course, time) {  // Constructor Function / class
    this.name = name;
    this.course = course;
    this.time = time;
}
let trainer1 = new Trainer('sanjay', 'NodeJS', '8.30 AM')
let trainer2 = new Trainer('Akash', 'Angular', '7.30 AM')
let trainer3 = new Trainer('Srinu', 'react', '11.30 AM')
console.log(trainer1)
console.log(trainer2)
console.log(trainer3)
