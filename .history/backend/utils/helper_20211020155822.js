const validUrl = require("valid-url");


const isUrlValid = (url) => {
  if (!validUrl.isUri(url)) {
    return res.status(401).json({ message: "Invalid base url" });
  }
};



module.exports = {
    isUrlValid,
    
}