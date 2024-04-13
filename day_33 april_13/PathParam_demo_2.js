const express = require('express');
const axios = require('axios');
const app = express();


app.get('/users/:userName', async (req, res) => {
    const userName = req.params.userName || '';
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    res.send(response.data)

});
app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});