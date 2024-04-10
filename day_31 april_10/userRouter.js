const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('<h1>All Users</h1>');
});
userRouter.get('/details/:id', (req, res) => {
    res.send('<h1>User Details</h1>');
});

module.exports = userRouter;