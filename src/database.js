const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://andrea:tester88@cluster0-c5jcy.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));
