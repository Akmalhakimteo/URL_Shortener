import Header from "./components/Header";
import Button from "./components/Button";
import ShortenURL from "./components/ShortenURL";
import History from "./components/History";
import PreviousURLs from "./components/PreviousURLs";
function App() {

  const onClick = ( ) => {
    console.log('click')
  }
  return (
    <div className="container">
      
      <Header/>
      <ShortenURL/>
      <History/>
    </div>
  );
}

export default App;
