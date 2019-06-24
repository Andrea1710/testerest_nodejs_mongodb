const express = require("express");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev")); // read every http request from console
app.use(express.urlencoded({ extended: false }));
app.use(
  multer({ dest: path.join(__dirname, "public/img/uploads") }).single("image") // create folders to store images uploaded
);

// Global Variables

// Routes
app.use(require("./routes"));

// Static Files

// Starting Server
app.listen(3000, () => console.log(`Server on port ${app.get("port")}`));
