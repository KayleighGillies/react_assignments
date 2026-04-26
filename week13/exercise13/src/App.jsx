import "./css/app.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <Home />
      </div>
    </div>
  );
}
export default App;
