const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  console.log(res)
  res.render("login");
});

module.exports = router;
