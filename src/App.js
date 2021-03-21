import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import SearchBox from "./searchbox"
import Timer from "./timer" 
import ApiCall from "./Api"
function App() {
  return (
      <div className="mainDiv">
        <div className="Header"><h1 >React Weather App</h1></div>
        
        <div className="centerDiv">
        <Timer/>
          <SearchBox/>
          
          
        </div>
    </div>
  );
}

export default App;
