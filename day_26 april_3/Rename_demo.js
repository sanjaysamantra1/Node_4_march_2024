const fs = require('fs');

fs.rename('./abc.txt','xyz.txt', (err) => {
    if (err) throw err;
    console.log('file rnamed');
});