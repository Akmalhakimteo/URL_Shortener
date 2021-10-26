import Header from "./components/Header";
import Button from "./components/Button";
import ShortenURL from "./components/ShortenURL";
import History from "./components/History";
import PreviousURLs from "./components/PreviousURLs";
import { useState } from "react";
import Footer from "./components/Footer";
require("dotenv").config();
function App() {
  const [previousURLs, setPreviousURLs] = useState([
  ]);

  const shortenURL = async (url) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    try {
      const res = await fetch(`http://{process.env.HOST}:8080/api/url/shorten`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(url),
      });
      if(res.status==200){
        const data = await res.json();
        const newURL = { id, ...data };
        console.log(data);
        setPreviousURLs([...previousURLs, newURL]);
      }else if(res.status==401){
        alert("Please ensure that your link starts with 'http' or https'!")
      }else{
        alert("Please ensure that that is an actual link")
      }
      
    } catch (error) {
      alert("An error occurred, please try again later");
    }
  };
  return (
    <div className="container">
      <Header />
      <ShortenURL onShorten={shortenURL} />
      {/* <History /> */}
      {previousURLs.length === 0 ? (
        <h4>Try our URL Shortener now!</h4>
      ) : (
        <PreviousURLs previousURLs={previousURLs} />
      )}
      <Footer />
    </div>
  );
}

export default App;
