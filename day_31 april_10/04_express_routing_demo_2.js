const express = require('express');
const app = express();
const userRouter = require('./userRouter');
const productRouter = require('./productROuter');

app.get('/', (req, res) => {
    res.send('<h1>Server Running...</h1>');
});

app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});