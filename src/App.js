import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-28 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Gallery />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
