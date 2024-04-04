const path = require('path');

let pathObj = { dir: 'd:/web development/ui/javascript/file1.js' }
let pathStr = path.format(pathObj); // object to string
console.log(pathStr);
let pathOb = path.parse(pathStr);
console.log(pathOb);


let path1 = 'C:/Users/SANJAY/OneDrive/Desktop/NareshIT/Node_4_march_2024/day_26 april_3/xyz.txt'
let path2 = '../day_26 april_3/xyz.txt'
console.log(path.isAbsolute(path1)); // Entire path
console.log(path.isAbsolute(path2)); // not the entire path, relative path from current file

let part1 = 'C:/Users/SANJAY/OneDrive/Desktop/';
let part2 = '/NareshIT/Node_4_march_2024/day_26 april_3/xyz.txt';
console.log(path.join(part1, part2))
console.log(part1 + part2);

let myPath = '../day_26 april_3//day_26_notes.txt/';
console.log(path.normalize(myPath))
console.log(path.resolve(myPath))