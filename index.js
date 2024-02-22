var express = require("express");
var cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

const multer = require("multer");
const upload = multer();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), function (req, res) {
  const { originalname: name, mimetype: type, size } = req.file;
  res.json({ name, type, size });
});

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
