// Object De-structuring
let user = { name: 'sanjay', age: 50, add: 'bangalore', phone: 12345678 };

let myname = user.name;
let myage = user.age;
let myadd = user.add;
console.log(myname, myage, myadd);

// ES-6
let { name, age, add } = user;
console.log(name, age, add);

let { a, b, c } = user;
console.log(a, b, c);

let { name: p, add: q, phone: r } = user;
console.log(p, q, r);


