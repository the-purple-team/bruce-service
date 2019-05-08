const express = require('express');
const updateDatabase = require('../database/index.js').updateDatabase;

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/products/');

app.get('/fill-database-with-mock-data', (res, req) => {
  // @TODO: Generate mock data using Faker npm package then pass data into updateDatabase
  // updateDatabase();
});

app.listen(port, () =>
  console.log(`App connection successful! App hosted at port: ${port}`)
);
