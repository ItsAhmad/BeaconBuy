const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let messages = [];


app.post('/send', (req, res) => {
  const { message } = req.body;
  if (message) {
    messages.push(message);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Message is required' });
  }
});
