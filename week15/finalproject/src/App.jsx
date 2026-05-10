import "./css/app.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Artists from "./pages/Artists.jsx";
import About from "./pages/About.jsx";  
import Footer from "./components/Footer.jsx"; 
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/artists" element={
                <div className="content-wrapper"> 
                  <Artists />
                </div>
            } />
            <Route path="/about" element={
              <div className="content-wrapper">
              <About />
              </div>
            } />
          </Routes>
        <Footer />
    </HashRouter>
  );
}
export default App;
