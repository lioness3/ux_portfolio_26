import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import "./styles/global.css";
import campstoreImg from "./assets/images/campstore.png";
import OHCImg from "./assets/images/oceanharbor.png";
import dineOrDitchImg from "./assets/images/dineorditch.png";
import thermostatImg from "./assets/images/thermostat.png";
import SOSImg from "./assets/images/SOS.png";
import inventoryImg from "./assets/images/inventory.png";
import Footer from "./components/Footer";
const studies = [
  {
    mainImage: campstoreImg,
    bgColor: "#8DA293",
    title: "Camp Store App",
    description: "UX Design.",
  },
  {
    mainImage: OHCImg,
    bgColor: "#A2C9C9",
    title: "Ocean Harbor Condominium",
    description: "Full Stack Development.",
  },
  {
    mainImage: dineOrDitchImg,
    bgColor: "#FFDFB1",
    title: "Dine or Ditch",
    description: "Full Stack Development.",
  },
  {
    mainImage: thermostatImg,
    bgColor: "#E7E7E7",
    title: "Thermostat",
    description: "Embedded Systems.",
  },
  {
    mainImage: SOSImg,
    bgColor: "#D6ABA5",
    title: "SOS",
    description: "Embedded Systems.",
  },
  {
    mainImage: inventoryImg,
    bgColor: "#D6ABA5",
    title: "Inventory",
    description: "Full Stack Development.",
  },
];

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
