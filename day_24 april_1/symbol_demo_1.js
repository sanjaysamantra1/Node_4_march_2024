let user = {};

user['name'] = 'sanjay'; // key is 'string'
user.age = 50; // key is string

let myid = Symbol('user id');
user[myid] = 101; // key is symbol

console.log(user); // 2 keys are string, 1 key is symbol

console.log(user.name, user.age, user[myid])


for (key in user) {
    console.log(key + ' ===== ' + user[key])
}
console.log(Object.keys(user));

console.log(Object.getOwnPropertySymbols(user));

let copiedUser = Object.assign(user);
console.log(copiedUser)
