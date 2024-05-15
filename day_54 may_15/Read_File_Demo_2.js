const fs = require('fs');

console.time('readFile')
const readStream = fs.createReadStream('./file1.txt', 'utf8');
readStream.on('data',(chunk)=>{
    console.log(`Read ${chunk.length} data \n ${chunk}`)
})
console.timeEnd('readFile')
