const express = require("express");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares

// Global Variables

// Routes

// Static Files

// Starting Server
app.listen(3000, () => console.log(`Server on port ${app.get("port")}`));
