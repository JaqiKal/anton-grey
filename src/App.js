import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-28 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/work" element={<Gallery />} />
          <Route path="/contact" element={<About />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
