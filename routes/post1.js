// routes/post1.js

const express = require('express');
const router = express.Router();

// GET /post/1 - Render the post 1 details page
router.get('/', (req, res) => {
    res.render('post1'); // Render the post1.ejs template
});

module.exports = router;
