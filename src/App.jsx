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

    categories: {
      myRole: {
        headline: "Lead UX Designer",
        description:
          "I was the Lead UX Designer for this project. I guided the design process from early research to polished prototypes. My work included conducting user research, shaping user stories, organizing the information architecture, and creating wireframes and high-fidelity designs in Figma.",
      },
      problem: {
        headline: "Waiting Instead of Relaxing",
        description:
          "Campers often face long lines at the camp store, which takes time away from relaxing and enjoying nature. The lack of a convenient ordering system creates frustration and disrupts the overall camping experience.",
      },
      goal: {
        headline: "Create an Accessible App",
        description:
          "Create a mobile app that enables campers to place store orders ahead of time and access campground event information directly from their phones. More time for s’mores, less time in line.",
      },
      userResearch: "",
      persona: "",
      wireframes: "",
      designSystem: "",
      finalDesign: "",
      takeaways: "",
      nextSteps: "",
    },
  },
  {
    mainImage: OHCImg,
    bgColor: "#A2C9C9",
    title: "Ocean Harbor Condominium",
    description: "Full Stack Development.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: { headline: "", description: "" },
      goal: { headline: "", description: "" },
      userResearch: "",
      persona: "",
      wireframes: "",
      designSystem: "",
      finalDesign: "",
      takeaways: "",
      nextSteps: "",
    },
  },
  {
    mainImage: dineOrDitchImg,
    bgColor: "#FFDFB1",
    title: "Dine or Ditch",
    description: "Full Stack Development.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: { headline: "", description: "" },
      goal: { headline: "", description: "" },
      userResearch: "",
      persona: "",
      wireframes: "",
      designSystem: "",
      finalDesign: "",
      takeaways: "",
      nextSteps: "",
    },
  },
  {
    mainImage: thermostatImg,
    bgColor: "#E7E7E7",
    title: "Thermostat",
    description: "Embedded Systems.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: { headline: "", description: "" },
      goal: { headline: "", description: "" },
      userResearch: "",
      persona: "",
      wireframes: "",
      designSystem: "",
      finalDesign: "",
      takeaways: "",
      nextSteps: "",
    },
  },
  {
    mainImage: SOSImg,
    bgColor: "#D6ABA5",
    title: "SOS",
    description: "Embedded Systems.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: { headline: "", description: "" },
      goal: { headline: "", description: "" },
      userResearch: "",
      persona: "",
      wireframes: "",
      designSystem: "",
      finalDesign: "",
      takeaways: "",
      nextSteps: "",
    },
  },
  {
    mainImage: inventoryImg,
    bgColor: "#D6ABA5",
    title: "Inventory",
    description: "Full Stack Development.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: { headline: "", description: "" },
      goal: { headline: "", description: "" },
      userResearch: "",
      persona: "",
      wireframes: "",
      designSystem: "",
      finalDesign: "",
      takeaways: "",
      nextSteps: "",
    },
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
            <Route
              path="/case-study-camp-store"
              element={<CaseStudyDetail />}
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
