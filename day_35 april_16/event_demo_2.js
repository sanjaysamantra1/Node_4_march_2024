const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('calculation', function (a, b) { // listener-1 
    console.log(a + b);
})
eventEmitter.addListener('calculation', function (a, b) { // listener-2
    console.log(a * b);
})
eventEmitter.emit('calculation', 10, 20); // triggering a custom event

