const fs = require('fs')

const f1 = () => { console.log('F1....') }
const f2 = () => { console.log('F2....') }

fs.readFile('./abc.txt', (err, data) => {
    console.log(data.toString());
    setTimeout(f1);
    setImmediate(f2);
});