const express = require('express');
const axios = require('axios');
const app = express();


app.get('/temp', async (req, res) => {
    const { city } = req.query;
    const myUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    const response = await axios.get(myUrl);
    console.dir(response.data)
    res.send(`<h1>City Name is: ${city} and temperature is:${response.data.main.temp}</h1>`)
});
app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});