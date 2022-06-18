const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up, listening to port ${port}`);
});
