const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

// Get route obj
var router = require('./routes.js');

app.use(express.json());

// Set app to utilize router for all requests?
app.use('/api', router);

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})