const fs = require('fs');

fs.readFile('./File4.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data);
});