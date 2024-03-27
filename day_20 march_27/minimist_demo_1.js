const minimist = require('minimist');

let argObj = minimist(process.argv.slice(2));
console.log(argObj)