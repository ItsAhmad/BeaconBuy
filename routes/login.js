const express = require("express");
const router = express.Router();
const cookieSession = require("cookie-session");
const userDatabase = require("../db/queries/users.js");

router.get("/login", (req, res) => {
  const username = req.session['username']

  res.render("login");
});

module.exports = router;
