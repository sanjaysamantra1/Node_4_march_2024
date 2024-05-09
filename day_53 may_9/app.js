const express = require('express');
const connectToDatabse = require('./db');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

const authController = require('./controller/AuthController');
app.use('/api/auth', authController);

app.listen(5000, async () => {
    await connectToDatabse();
    console.log('server listening on http://localhost:5000')
});