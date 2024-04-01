const f1 = () => { console.log('F1....') }
const f2 = () => { console.log('F2....') }
setTimeout(f1);
setImmediate(f2);