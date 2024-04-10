const express = require('express');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.send('<h1>All Products</h1>');
});
productRouter.get('/details/:id', (req, res) => {
    res.send('<h1>Product Details</h1>');
});

module.exports = productRouter;