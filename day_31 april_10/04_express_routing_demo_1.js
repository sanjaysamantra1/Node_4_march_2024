const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});
app.get('/about', (req, res) => {
    res.send('<h1>About us Page</h1>');
});
app.get('/careers', (req, res) => {
    res.send('<h1>Careers Page</h1>');
});
app.get('*', (req, res) => {
    res.send('<h1>No Page Found</h1>');
});
app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});