const { EventEmitter } = require('events');
const TicketManager = require('./TicketManager');
const EmailService = require('./EmailService');

let ticketManager = new TicketManager(2);
let emailService = new EmailService();

ticketManager.on('buyTicket', function f1(person, price, time) {
    console.log(`${person} booked a ticket for ${price} at ${time}`);
    emailService.send(person);
})
ticketManager.on('buyTicket', function f2(person, price, time) {
    console.log(`${person} booked a ticket for ${price} at ${time}`);
    emailService.send(person);
})
ticketManager.on('NoTicketAvailable', (error) => {
    console.error(error)
})
console.log(ticketManager.eventNames())
console.log(ticketManager.getMaxListeners())

ticketManager.buy('srini@gmail.com', 200)
ticketManager.buy('sanjay@gmail.com', 300)
// ticketManager.buy('akash@gmail.com', 100)

