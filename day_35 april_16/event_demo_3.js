const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

const cars = ['tata', 'honda', 'maruti'];

eventEmitter.addListener('addFirst', function (car) {
    cars.unshift(car);
    console.log(cars);
})
eventEmitter.on('deleteFirst', function (car) {
    cars.shift();
    console.log(cars);
})
eventEmitter.on('addLast', function (car) {
    cars.push(car);
    console.log(cars);
})
eventEmitter.on('deleteLast', function (car) {
    cars.pop();
    console.log(cars);
})
eventEmitter.emit('addFirst', 'mahindra');

console.log(eventEmitter.listenerCount('addFirst'))

