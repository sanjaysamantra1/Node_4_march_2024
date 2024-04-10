const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log('I am a middleware-1, will be called before the req reache the route');
    next();
})
app.use(function (req, res, next) {
    console.log('I am a middleware-2, will be called before the req reache the route');
    next();
})
app.use(function (req, res, next) {
    console.log('I am a middleware-3, will be called before the req reache the route');
    next();
})

app.get('/users', (req, res) => {
    console.log('This is get call on users')
})
app.post('/users', (req, res) => {
    console.log('This is post call on users')
})

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});