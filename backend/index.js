const express = require("express");
const bodyParser = require("body-parser");
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// const app = express();

// app.use(express.json());

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Connected to DB");
  });

const port = 3001;
app.listen(port, () => {
  console.log("App running on port");
});
