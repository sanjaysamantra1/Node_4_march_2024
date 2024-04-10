const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const { method, body, protocol, params, ip } = req;
    console.log(req)
    res.send({ method, body, protocol, params, ip });
});

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});