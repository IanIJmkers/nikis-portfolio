import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from "./pages/projects";

function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/plant-study" element={<Project1 />} />
          <Route path="/mountain" element={<Project2 />} />
          <Route
            path="/the gallery of unwanted things"
            element={<Project3 />}
          />
          <Route path="/stonetown" element={<Project4 />} />
          <Route path="/the 3rd space" element={<Project5 />} />
          <Route path="/rodeo" element={<Project6 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
