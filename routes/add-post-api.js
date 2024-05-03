const fs = require("fs");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../db/connection");

// Set up multer for handling multipart/form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image_uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });


router.post("/add-post", upload.single("image"), (req, res) => {
  const text_input = req.body.textData;
  const imageFile = req.file;
  console.log("TEXT INPUT:", text_input)

  const imageData = fs.readFileSync(imageFile.path);
  const imageBase64 = imageData.toString("base64");

  const sql =
    "INSERT INTO posts (boat_title, boat_description, boat_price, image_url) VALUES (?,?,?,?);";
  db.query(sql, [text_input, imageBase64], (err, result) => {
    if (err) {
      res.send("Error uploading to database:", err);
    }
    return;
  });
  res.json({ success: true });
  // res.redirect('/')
});

module.exports = router;
