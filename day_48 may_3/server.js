const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const activeUsers = new Set();

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('new user', function (data) {
        socket.userId = data;
        activeUsers.add(data);
        io.emit('new user', [...activeUsers])
    })
    socket.on('disconnect', function (name) {
        activeUsers.delete(socket.userId);
        io.emit('user disconnected', socket.userId)
    })
    socket.on('chat message', function (data) {
        io.emit('chat message', data)
    })
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    })
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});