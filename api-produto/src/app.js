const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:password@cluster0.wgsftic.mongodb.net/estoque-produto');

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  next();
});

require('./models/product')
require('./models/product-category')

const productRouter = require('./routes/product-router');

const productCategoryRouter = require('./routes/product-category-router');

app.use('/products', productRouter);
app.use('/products-categories', productCategoryRouter);

module.exports = app;