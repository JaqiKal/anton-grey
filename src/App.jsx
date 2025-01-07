import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router basename="/anton">
      <div className="pt-4 pb-4 bg-gradient-to-r from-gray-200 via-slate-400 to-gray-500 ">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/work"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
