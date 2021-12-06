import "./App.css";
import Mainpage from "./components/mainpage/Mainpage";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="App__Sidebar">
        <Sidebar />
      </div>
      <div className="App__Mainpage">
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
