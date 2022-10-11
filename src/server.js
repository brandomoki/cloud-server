'use strict';

const express = require('express');

const PORT = process.env.PORT || 3002;


const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});


app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});


function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };

