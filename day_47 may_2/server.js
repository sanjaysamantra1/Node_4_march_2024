const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('nick', function (name) {
        socket.nickname = name;
    })
    socket.on('chat', function (data) {
        let nickname = socket.nickname;
        let currentTime = new Date().toLocaleTimeString();
        let payload = {
            message: data.message,
            nick: nickname,
            time: currentTime
        }
        io.emit('chat', payload)
    })
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});