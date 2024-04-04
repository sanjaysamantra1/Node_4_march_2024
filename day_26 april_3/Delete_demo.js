const fs = require('fs');

fs.unlink('./abc.txt', (err) => {
    if (err) throw err;
    console.log('file deleted');
});