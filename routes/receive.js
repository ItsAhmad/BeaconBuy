const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let messages = [];

app.get('/receive', (req, res) => {
  res.status(200).json({ messages });
});
