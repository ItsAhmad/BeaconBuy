/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const db = require("../db/connection");

router.get('/', (req, res) => {
  const userData = req.headers.cookie;
  console.log(req.session.id)

  const templateVars = {
    userData,
    // id : req.session.id
  };
  res.render('user-post', templateVars);
});

module.exports = router;
