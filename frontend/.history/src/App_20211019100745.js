import Header from "./components/Header";
import Button from "./components/Button";
import ShortenURL from "./components/ShortenURL";
import History from "./components/History";
import PreviousURLs from "./components/PreviousURLs";
import { useState } from "react";
function App() {

  const [previousURLs, setPreviousURLs] = useState([
    
  ]);

  const onClick = ( ) => {
    console.log('click')
  }
  return (
    <div className="container">
      
      <Header/>
      <ShortenURL/>
      <History/>
      {previousURLs.length===0? <h4>Try our URL Shortener now!</h4>:<PreviousURLs previousURLs = {previousURLs}/>}
    </div>
  );
}

export default App;
