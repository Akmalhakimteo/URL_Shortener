const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    // res.redirect("http://localhost:3000");
    res.json({ message: "Welcome to Akmal's URL Shortener" });
  });
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
