const express = require("express");

const PORT = process.env.PORT || 3000;
const fakeapp = express();

fakeapp.get("/", (req, res) => {
  res.json({ message: "Welcome to Akmal's URL Shortener" });
});
fakeapp.listen(PORT, () => `));

module.exports = fakeapp