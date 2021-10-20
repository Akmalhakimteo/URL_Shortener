const validUrl = require("valid-url");

const isUrlValid = () => {
    url = "www.npjs.com/package/valid-url"
    if(validUrl.isUri(url)){
        console.log("all good")
    }else{
        console.log("BAD!!!!")
    }
}

isUrlValid()