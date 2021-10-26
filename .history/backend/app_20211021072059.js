const express = require("express");
const cors = require("cors");
const app = express();
const utils = require("./utils/errors");
const db = require("./models");

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync();

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000");
  // res.json({ message: "Welcome to Akmal's URL Shortener" });
});
app.use("/", require("./controllers/index"));
app.use("/api/url", require("./controllers/url"));
app.use(utils.malformedURL);
app.use(utils.unknownEndpoint);

module.exports = app;