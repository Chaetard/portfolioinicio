import "./App.css";
import Navs from "./components/Navs";
import Mainport from "./components/Mainport";
import MainTextTi from "./components/MainTextTi";
import "animate.css";
import MyComponent from "./components/MyComponent";
import WeatherWidget from "./components/WeatherWidget";


function App() {
  return (
    <div className="App text-fluid">
      <Navs />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-9 col-sm-12">
            <Mainport />
          </div>
          <div className="col-lg-7 col-md-13 co-sm-12">
            <MainTextTi />
          </div>
        </div>
       
      </div>
        
      <MyComponent/>
      
    </div>
  );
}

export default App;
