const os = require('os');

console.log('uptime ', os.uptime() / 60 / 60, 'hours')
console.log('CPUS ', os.cpus())
console.log('CPUS ', os.cpus().length, 'Core')
console.log('Home Dir: ', os.homedir())
console.log('Temp Dir: ', os.tmpdir())
console.log('hostname: ', os.hostname())
console.log('userInfo: ', os.userInfo())
