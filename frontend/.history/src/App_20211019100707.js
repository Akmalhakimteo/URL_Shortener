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
      shortURL: "bit.ly/12312dfa",
      longURL:
        "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    },
    {
      id: 2,
      shortURL: "bit.ly/12312dfa",
      longURL:
        "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    },
  ]);

  const onClick = ( ) => {
    console.log('click')
  }
  return (
    <div className="container">
      
      <Header/>
      <ShortenURL/>
      <History/>
      {previousURLs.length===0? <h3>:<PreviousURLs previousURLs = {previousURLs}/>}
    </div>
  );
}

export default App;
