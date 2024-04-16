const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('customEvent', function () {
    console.log('A custom Event Trigerred')
})
eventEmitter.emit('customEvent'); // Event without argument

eventEmitter.on('addition', function (a, b) {
    console.log(a + b)
})
eventEmitter.emit('addition', 10, 20)
eventEmitter.emit('addition', 100, 200); // ebent with argument

