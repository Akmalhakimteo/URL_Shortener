const validUrl = require("valid-url");


const isUrlValid = (url) => {
  if (!validUrl.isUri(url)) {
    return res.status(401).json({ message: "Invalid base url" });
  }
};

const isUrlValid = () => {
  url = "httfpss://fullstackopen.com/en/part4/testing_the_backend";
  if (validUrl.isUri(url)) {
    console.log("all good");
  } else {
    console.log("BAD!!!!");
  }
};

isUrlValid();
