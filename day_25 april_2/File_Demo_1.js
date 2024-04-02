const fs = require('fs');

// Error First callback
fs.readFile('./File1.txt', (err, data) => {
    console.log(data); // Buffer data
    console.log(data.toString()); // string data
});