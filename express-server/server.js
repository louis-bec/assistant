const express = require('express');
const app = express();
const port = 3000;

const { getUsers, getOrders } = require('./service');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json(getUsers());
});

app.get('/orders', (req, res) => {
  res.json(getOrders());
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
