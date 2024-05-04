const express = require("express");
const router = express.Router();
const cookieSession = require("cookie-session");

router.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

router.get('/', (req, res) => {
  let userData = req.session.user_data
  if (userData !== null) {
    userData = null;
  }
  const templateVars = {
    userData
  }
  res.render("index", templateVars);
})

router.post("/", (req, res) => {
  req.session = null
  res.redirect('/')
});

module.exports = router;
