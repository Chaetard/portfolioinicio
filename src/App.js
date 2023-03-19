import "./App.css";
import Navs from "./components/Navs";
import Mainport from "./components/Mainport";
import Maintext from "./components/Maintext";
import Barra from "./components/Barra";

function App() {
  return (
    <div className="App">
      <Navs />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <Mainport />
          </div>
          <div className="col-lg-7 ">
            <Maintext />
            <Barra/>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
