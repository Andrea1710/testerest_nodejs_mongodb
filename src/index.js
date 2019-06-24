const express = require("express");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const uuid = require("uuid/v4");
const { format } = require("timeago.js");

// Initializations
const app = express();
require("./database");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev")); // read every http request from console
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img/uploads"), // destination of the uploaded images
  filename: (req, file, cb, filename) => {
    cb(null, uuid() + path.extname(file.originalname)); // callback to pass the extension to images uploaded
  }
});
app.use(
  multer({ storage: storage }).single("image") // create folders to store images uploaded
);

// Global Variables
app.use((req, res, next) => {
  app.locals.format = format;
  next();
});

// Routes
app.use(require("./routes"));

// Static Files
app.use(express.static(path.join(__dirname, "public"))); // folder public can be accessed from Browser

// Starting Server
app.listen(3000, () => console.log(`Server on port ${app.get("port")}`));
