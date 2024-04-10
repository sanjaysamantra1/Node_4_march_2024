const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send({ email, password });
});
app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});