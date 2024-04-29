import express from 'express';
import axios from 'axios';
import { createClient } from 'redis';

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const app = express();

app.get('/',(req,res)=>{
    res.send('api working')
})

app.get('/fetchData', async (req, res) => {
    
    let countryName = req?.query?.country || 'india';
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${countryName}`;

    const dataInRedis = await redisClient.get(countryName);
    if (dataInRedis) {
        console.log('Data Found in Redis server');
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'Redis', output })
    } else {
        console.log('Data Not Found in Redis server');
        let response = await axios.get(url);
        let output = response.data;

        // Store the data in Redis server
        await redisClient.set(countryName, JSON.stringify(output), {
            EX: 60*5,  // Time in seconds,
            NX: true // NX- set the data only if it is not present
        });
        console.log('Data Got Saved in Redis Server');
        res.send({ source: 'API', output })
    }
});

app.listen(5000);