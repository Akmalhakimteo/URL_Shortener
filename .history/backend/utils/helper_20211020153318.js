const validUrl = require("valid-url");
const isURL = require("isurl")
const isUrlValid = () => {
    url = "https://fullstackopen.com/en/part4/testing_the_backend"
    if(validUrl.isUri(url)){
        console.log("all good")
    }else{
        console.log("BAD!!!!")
    }
}

isUrlValid()