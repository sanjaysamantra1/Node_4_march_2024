const fs = require('fs');

fs.stat('../day_25 april_2/file1.txt', (err, data) => {
    if (err) throw err;
    console.log(data.isFile())
    console.log(data.isDirectory())
    console.log(data.size)
})