const express = require('express');
const cors = require('cors');

const app = express();

var whitelist = ['https://www.w3schools.com', 'https://www.tutorialspoint.com'];

var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));

app.get('/emps', (req, res) => {
    const users = [
        { name: 'sanjay', add: 'bang', age: 50 },
        { name: 'abc', add: 'Hyd', age: 40 },
    ]
    res.status(200).json(users);
});

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});