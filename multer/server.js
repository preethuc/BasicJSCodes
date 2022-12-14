const express = require("express");
const multer = require("multer");

const app = express();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//middleware
const upload = multer({ storage: fileStorageEngine });

//Route
//single image
app.post("/api/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("single file upload success");
});
//multiple images
app.post("/api/multiple", upload.array("images", 2), (req, res) => {
  console.log(req.files);
  res.send("multiple file upload success");
});

//server
app.listen(3000);
