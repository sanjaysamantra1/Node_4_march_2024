const os = require('os');

console.log('Type ', os.type())
console.log('Platform ', os.platform())
console.log('Architecture ', os.arch())
console.log('Release ', os.release())
console.log('version ', os.version())
console.log('machine ', os.machine())
console.log('freemem ', os.freemem() / 1024 / 1024 / 1024)
console.log('totalmem ', os.totalmem() / 1024 / 1024 / 1024)