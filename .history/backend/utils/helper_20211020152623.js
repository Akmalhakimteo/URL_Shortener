const validUrl = require("valid-url");
const isURL = require("isurl")
const isUrlValid = () => {
    url = "fullstakopen.com/en/part4/testing_the_backend"
    if(validUrl.){
        console.log("all good")
    }else{
        console.log("BAD!!!!")
    }
}

isUrlValid()