const express = require("express");
const cors = require("cors");
const app = express();
const utils = require("./utils/errors");
const db = require("./models");
const config = require("./config/db.config")
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));


config.sequelize.sync();
config.sequelize.authenticate()
.then(()=>{
  console.log("Successfully connected to MYSQL DB")
})
.catch((err)=>{
  console.error("Error connecting to MYSQL DB",err)
  process.exit(1)
})

app.use(express.static("build"));
app.use("/", require("./controllers/index"));
app.use("/api/url", require("./controllers/url"));
app.use(utils.malformedURL);
app.use(utils.unknownEndpoint);

module.exports = app;
