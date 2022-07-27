const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connection = require("./config/database");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up, listening to port ${port}`);
});
