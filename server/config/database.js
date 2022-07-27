const mongoose = require("mongoose");
require("dotenv").config();

const connStr = process.env.DB_STRING;

mongoose.connect(connStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database !"));

module.exports = connection;
