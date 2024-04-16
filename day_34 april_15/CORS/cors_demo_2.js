const express = require('express');
const cors = require('cors');

const app = express();
var corsOptions = {
    origin: 'https://www.w3schools.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

app.get('/users', (req, res) => {
    const users = [
        { name: 'sanjay', add: 'bang', age: 50 },
        { name: 'abc', add: 'Hyd', age: 40 },
    ]
    res.status(200).json(users);
});

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});