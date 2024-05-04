// routes/post1.js

const express = require('express');
const router = express.Router();

// GET /post/1 - Render the post 1 details page
router.get('/', (req, res) => {
    const userData = req.headers.cookie;
    console.log(req.session.id);

    const templateVars = {
      userData,
      // id : req.session.id
    };
    res.render('post1', templateVars); // Render the post1.ejs template
});

module.exports = router;
