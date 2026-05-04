import './css/app.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={
              <div className="content-wrapper">
                <ProjectsPage />
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