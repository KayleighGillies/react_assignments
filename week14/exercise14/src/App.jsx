import "./css/app.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import About from "./pages/About.jsx";  
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
export default App;
