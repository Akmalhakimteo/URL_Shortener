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

  const shortenURL = (url) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const shortURL = "fdsaffsdajfnalsdkf";
    const newURL = { id, shortURL, url };
    setPreviousURLs([...previousURLs, newURL]);
  };
  return (
    <div className="container">
      <Header />
      <ShortenURL onShorten={shortenURL} />
      <History />
      {previousURLs.length === 0 ? (
        <h4>Try our URL Shortener now!</h4>
      ) : (
        <PreviousURLs previousURLs={previousURLs} />
      )}
    </div>
  );
}

export default App;
