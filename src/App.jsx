import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";
import Footer from "./components/Footer";
import Legal from "./pages/Legal";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-info" element={<Legal />} />
          </Routes>
          <img
            src="./crop.png"
            alt=""
            className="absolute bottom-0 opacity-80 w-full max-h-100"
          />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
