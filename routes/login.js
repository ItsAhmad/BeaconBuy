const express = require("express");
const router = express.Router();
const { getUserByUserData } = require('../db/queries/users')
const cookieSession = require("cookie-session");

router.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

router.get("/", (req, res) => {
  const userData = req.headers.cookie;
  if (userData) {
    res.redirect('/')
    return;
  }
  const templateVars = {
    userData,
  };
  res.render("login", templateVars);
});

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.send("Input cannot be empty.");
    return;
  }

  return getUserByUserData({ username, password })
    .then(data => {
      if (data.length < 1) {
        res.send("Username and/or password are incorrect")
        return
      }
      req.session.user_data = data
      res.redirect("/");
    }).catch(err => {
      res.send('An error has occurred:', err)
      return;
    })
});

module.exports = router;
