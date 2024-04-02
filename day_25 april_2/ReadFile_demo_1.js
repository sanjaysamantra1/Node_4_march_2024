const fs = require('fs');

fs.readFile('./File1.txt', 'utf-8', (err, data) => {
    console.log(data);
});