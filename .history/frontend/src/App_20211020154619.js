import Header from "./components/Header";
import Button from "./components/Button";
import ShortenURL from "./components/ShortenURL";
import History from "./components/History";
import PreviousURLs from "./components/PreviousURLs";
import { useState } from "react";

import Footer from "./components/Footer";
function App() {
  const [previousURLs, setPreviousURLs] = useState([
    // {
    //   id: 1,
    //   shortURL: "bit.ly/122dfa",
    //   actualURL:
    //     "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    // },
    // {
    //   id: 2,
    //   shortURL: "bit.ly/1s2xda",
    //   actualURL:
    //     "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    // },
  ]);

  const shortenURL = async (url) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    try {
      const res = await fetch(`http://localhost:8080/api/url/shorten`, {
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
        alert("Please ensure that your link starts with 'http' or https'")
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
