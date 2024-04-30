const express = require("express");
const router = express.Router();
const { getUsers } = require('./users')
const cookieSession = require("cookie-session");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.send("Input cannot be empty.");
      return;
    }

    const users = getUsers();
    console.log(users);
    res.redirect("/index");
  });
module.exports = router;
