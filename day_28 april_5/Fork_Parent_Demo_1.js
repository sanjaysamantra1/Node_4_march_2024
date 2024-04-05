const cp = require('child_process');

const parent = cp.fork(`${__dirname}/Fork_Child_Demo_1.js`);

parent.on('message', (m) => {
    console.log('PARENT got message:', m);
});

// Causes the child to print: CHILD got message: { hello: 'world' }
parent.send({ hello: 'world' });