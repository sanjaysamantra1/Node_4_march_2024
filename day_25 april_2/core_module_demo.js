const os = require('os');
console.log(os.cpus().length)
console.log(os.freemem()/1024/1024/1024 )