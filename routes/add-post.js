const fs = require("fs");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../db/connection");
const cookieSession = require("cookie-session");
router.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
router.use(express.static(__dirname + "/public"));
router.use("/uploads", express.static("uploads"));

router.get("/", (req, res) => {
  const userData = req.headers.cookie;
  if (!userData) {
    res.redirect("/login");
    return;
  }
  const templateVars = {
    userData,
  };
  res.render("add-post", templateVars);
});

router.post("/", upload.single("image"), (req, res) => {
  const boat_title = req.body.boat_title;
  const boat_description = req.body.boat_description;
  const boat_price = req.body.boat_price;
  const image_url = req.file.path;
  const user_id = req.session.user_data[0].id;

  const query1 =
    "INSERT INTO posts (user_id, boat_title, boat_description, boat_price, image_url) VALUES ($1,$2,$3,$4,$5) RETURNING id;";
  db.query(query1, [user_id, boat_title, boat_description, boat_price, image_url])
    .then((data) => {
      req.session.id = data.rows[0].id;
      res.redirect("/user-post");
      //return res.send(image_url);
    })
    .catch((err) => {
      return res.status(500).send(err);
    })
});

module.exports = router;
