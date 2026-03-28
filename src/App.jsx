import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import "./styles/global.css";
import { caseStudies as studies } from "./data/caseStudies.js";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Portfolio studies={studies} />} />
            <Route
              path="/case-study/:id"
              element={<CaseStudyDetail studies={studies} />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
