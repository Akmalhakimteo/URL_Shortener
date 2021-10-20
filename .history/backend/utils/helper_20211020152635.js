const validUrl = require("valid-url");
const isURL = require("isurl")
const isUrlValid = () => {
    url = "http://fullstakopen.com/en/part4/testing_the_backend"
    if(validUrl.isUri(url)){
        console.log("all good")
    }else{
        console.log("BAD!!!!")
    }
}

isUrlValid()