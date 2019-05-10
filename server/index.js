const express = require('express');

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/products/:id', (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () =>
  console.log(`App connection successful! App hosted at port: ${port}`)
);
