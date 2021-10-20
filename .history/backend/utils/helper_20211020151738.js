const validUrl = require("valid-url");

const isUrlValid = () => {
    url = ""
    if(validUrl.isUri){
        console.log("all good")
    }else{
        console.log("BAD!!!!")
    }
}

isUrlValid()