const validUrl = require("valid-url");
const isURL = require("isurl")
const isUrlValid = () => {
    url = "fullstakopen.com/en/part4/testing_the_backend"
    if(isURL(new URL(url))){
        console.log("all good")
    }else{
        console.log("BAD!!!!")
    }
}

isUrlValid()