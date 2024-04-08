const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});
server.get('/users', (req, res) => {
    res.send('<h1>Get All Users</h1>');
});
server.get('/users/:id', (req, res) => {
    res.send('<h1>Get 1 Users</h1>');
});
server.post('/users', (req, res) => {
    res.send('<h1>Create  User</h1>');
});
server.put('/users/:id', (req, res) => {
    res.send('<h1>Update  User</h1>');
});
server.delete('/users/:id', (req, res) => {
    res.send('<h1>Delete  User</h1>');
});

server.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`)
});