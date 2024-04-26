const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get("/", (req, res) => {
  const query = `SELECT * FROM users`;
  db.query(query)
    .then((data) => {
      const widgets = data.rows;
      const users = res.json({ widgets });
      console.log(users)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
