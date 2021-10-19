import Header from "./components/Header";
import Button from "./components/Button";
import ShortenURL from "./components/ShortenURL";
import History from "./components/History";
import PreviousURLs from "./components/PreviousURLs";
import { useState } from "react";
function App() {
  const [previousURLs, setPreviousURLs] = useState([
    {
      id: 1,
      shortURL: "bit.ly/122dfa",
      longURL:
        "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    },
    {
      id: 2,
      shortURL: "bit.ly/1s2xda",
      longURL:
        "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    },
  ]);

  const shortenURL = async (url) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(url)
    // const res = await fetch(`http://localhost:8080/api/url/shorten`, { method: "POST",headers:{'Content-type':'application/json'},body: JSON.stringify(url) });
    // console.log(res)
    const shortURL = "bit.ly/3jd93";
    const longURL = url.URL
    const newURL = { id, shortURL, longURL };
    setPreviousURLs([...previousURLs, newURL]);
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
    </div>
  );
}

export default App;
