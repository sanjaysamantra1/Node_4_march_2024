const fs = require('fs');

fs.appendFile('./File2.txt', 'This is file-2 content \n', (err, data) => {
    if (err) throw err;
    console.log('data written succesfully')
});
