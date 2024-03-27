console.log(process.argv)
// process.argv = [ node , filePath ,arguments]

let name = process.argv[2];
let add = process.argv[3];
let age = process.argv[4];

console.log(`Your Name is ${name} , you are ${age} years old, Your address is ${add}`)