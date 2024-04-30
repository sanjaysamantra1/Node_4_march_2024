import express from 'express';
import { createClient } from 'redis';
import { MongoClient } from 'mongodb';

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

let mongoClient = new MongoClient('mongodb://0.0.0.0:27017');
let connection;

async function connectToDB() {
    connection = await mongoClient.connect();
    console.log('Connected to databse')
}

const app = express();

app.get('/', (req, res) => {
    res.send('api working')
})

app.get('/users/:id', async (req, res) => {
    let userId = req.params.id;
    const dataInRedis = await redisClient.get(userId);
    if (dataInRedis) {
        console.log('Data Found in Redis server');
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'Redis', output })
    } else {
        console.log('Data Not Found in Redis server');

        const user = await connection.db('march_4_2024').collection('users').findOne({ id: +userId });

        // Store the data in Redis server
        await redisClient.set(userId, JSON.stringify(user), {
            EX: 60 * 5,  // Time in seconds,
            NX: true // NX- set the data only if it is not present
        });
        console.log('Data Got Saved in Redis Server');
        res.send({ source: 'API', user })
    }
});

app.listen(5000, () => {
    connectToDB();
});