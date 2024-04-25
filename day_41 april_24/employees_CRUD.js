const { DB_URL, DB_NAME } = require('./dbConfig');
const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
const employeeModel = require('./employeeModel');


async function connectToDB() {
    mongoose.connect(`${DB_URL}/${DB_NAME}`);
    console.log('Connected successfully to mongoDB');
}

app.get('/employees', async (req, res) => {
    try {
        const employees = await employeeModel.find({});
        res.json(employees);
    } catch (err) {
        console.log(err)
    }
});
app.get('/employees/:id', async (req, res) => {
    const employeeId = +req.params.id;
    try {
        const employees = await employeeModel.find({ eId: employeeId });
        res.json(employees[0]);
    } catch (err) {
        console.log(err)
    }
});
app.post('/employees', async (req, res) => {
    try {
        const newEmp = new employeeModel(req.body);
        await newEmp.save();
        res.send('Employee Added Successfully');
    } catch (err) {
        res.status(400).send('Bad Request')
        // console.log(err)
    }
});
app.patch('/employees/:id', async (req, res) => {
    const employeeId = +req.params.id;
    const payload = req.body;
    try {
        await client.db('march_4_2024').collection('employees').updateOne({ eId: employeeId }, { $set: payload }, { upsert: true });
        res.send('Employee Updated Successfully');
    } catch (err) {
        console.log(err)
    }
});
app.delete('/employees/:id', async (req, res) => {
    const employeeId = +req.params.id;
    try {
        await employeeModel.remove({ eId: employeeId });
        res.send('Employee Deleted Successfully');
    } catch (err) {
        console.log(err)
    }
})

app.listen(5000, async () => {
    await connectToDB();
    console.log('Server Running on 5000')
});