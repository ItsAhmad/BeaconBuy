const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const userData = req.headers.cookie;
  if (!userData) {
    res.redirect('/login')
    return;
  }
  const templateVars = {
    userData
  };
  res.render("add-post", templateVars);
});

module.exports = router;


