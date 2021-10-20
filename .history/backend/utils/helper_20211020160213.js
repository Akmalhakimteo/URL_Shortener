const validUrl = require("valid-url");

const isUrlValid = (url,res) => {
  if (!validUrl.isUri(url)) {
      console.log("hey its working")
    // return res.status(401).json({ message: "Invalid base url" });
  }
};

module.exports = {
  isUrlValid,
};
