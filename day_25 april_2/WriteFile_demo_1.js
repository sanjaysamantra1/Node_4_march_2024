const fs = require('fs');

fs.appendFile('./File2.txt', 'This is file-2 content \n', (err, data) => {
    console.log('data written succesfully')
});
