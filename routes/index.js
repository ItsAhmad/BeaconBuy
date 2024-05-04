const express = require('express');
const router = express.Router();
const db = require("../db/connection");

router.get('/', (req, res) => {
  db.query('SELECT * FROM posts;')
    .then((data) => {
      const posts = data.rows;
      const userData = req.headers.cookie;
      res.render('index', { posts, userData });
    })
    .catch((err) => {
      console.error('Error fetching posts:', err);
      res.status(500).send('Error fetching posts');
    });
});

module.exports = router;
