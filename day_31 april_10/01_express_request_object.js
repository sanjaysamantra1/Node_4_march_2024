const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send({ email, password });
});

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});