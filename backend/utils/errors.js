const { response } = require("express");

const malformedURL = (error, res, next) => {
  console.error("Bad request", error);
  return res.status(404).send({ error: "Invalid URL. Please try again" });
  next(error);
};

const unknownEndpoint = (req, res) => {
  res.status(404).json("Unknown endpoint, please create a new short URL");
};

module.exports = {
  malformedURL,
  unknownEndpoint,
};
