const fs = require('fs');

const data1 = fs.readFileSync('./File1.txt', 'utf-8');
const data2 = fs.readFileSync('./File2.txt', 'utf-8');
fs.writeFileSync('./File3.txt', `${data1} ${data2}`);
console.log('Done')
