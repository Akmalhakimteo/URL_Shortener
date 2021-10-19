import Header from "./components/Header";
import Button from "./components/Button";
import ShortenURL from "./components/ShortenURL";
import History from "./components/History";
function App() {
  return (
    <div className="container">
      
      <Header/>
      <ShortenURL/>
      <History/>
    </div>
  );
}

export default App;
