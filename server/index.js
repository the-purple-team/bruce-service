const express = require('express');
const queryDatabase = require('../database/index.js').queryDatabase;

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/products/:id', (req, res) => {
  queryDatabase(req.params.id, (result) => {
    res.send(result);
  });
});

app.listen(port, () =>
  console.log(`App connection successful! App hosted at port: ${port}`)
);
