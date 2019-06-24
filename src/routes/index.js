const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Index Page");
});

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.post("/upload", (req, res) => {
  res.send("Uploaded");
});

router.get("/image/:id", (req, res) => {
  res.send("Profile Image");
});

router.get("/image/:id/delete", (req, res) => {
  res.send("Image Deleted");
});

module.exports = router;
