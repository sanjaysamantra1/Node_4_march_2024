const fs = require('fs');

fs.watch('../day_25 april_2/file1.txt', (err, file) => {
    console.log(`${file} changed`)
})