"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const navStyle = {
  backgroundColor: "#f8f9fa",
  padding: "10px",
};

const ulStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  display: "flex",
};

const liStyle = {
  marginRight: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#007bff",
};

export default App;
