const validUrl = require("valid-url");

const isUrlValid = () => {
    url = "hurl"
    if(validUrl.isUri(url)){
        console.log("all good")
    }else{
        console.log("BAD!!!!")
    }
}

isUrlValid()