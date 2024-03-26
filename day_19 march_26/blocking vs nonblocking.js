const fs = require('fs');

console.log('Line-1');
for (let i = 1; i <= 10000; i++) {
    console.log(i)
} // blocking
console.log('Line-7')

console.log('non blocking code started')
fs.readFile('./abc.txt', 'utf-8', (err,res) => { // non-blocking
    console.log(res);
})
console.log('This is non blocking code')