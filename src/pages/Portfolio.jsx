import Hero from "../components/sections/Hero";
import SectionTitle from "../components/SectionTitle";
import CaseStudies from "../components/sections/CaseStudies";
import section_caseStudyBanner from "../assets/images/sections/section_1.png";
import section_resumeBanner from "../assets/images/sections/section_2.png";
import section_aboutBanner from "../assets/images/sections/section_3.png";
import section_processBanner from "../assets/images/sections/section_4.png";
import section_contactBanner from "../assets/images/sections/section_5.png";

import MyProcess from "../components/sections/MyProcess";
import AboutMe from "../components/sections/AboutMe";
import Resume from "../components/sections/Resume";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Portfolio({ studies }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);
  return (
    <main>
      {/* HERO SECTION */}
      <Hero />
      {/* CASE STUDIES SECTION */}
      <SectionTitle
        title={"Case Studies"}
        subtitle={
          "A mix of real-world and continuing education projects that I have collected over the past few years. "
        }
        image={section_caseStudyBanner}
      />
      <CaseStudies studies={studies} />
      {/* MY PROCESS SECTION */}
      <SectionTitle
        title={"My Process"}
        subtitle={"A look into how I approach design challenges."}
        image={section_processBanner}
      />
      <MyProcess />
      {/* RESUME SECTION */}
      <SectionTitle
        title={"Resume"}
        subtitle={
          "Download my resume to learn more about my background, skills, and experience."
        }
        image={section_resumeBanner}
      />
      <Resume />
      {/* ABOUT ME SECTION */}
      <SectionTitle
        title={"About me"}
        subtitle={
          "Learn more about my background, skills, and experience as a UX designer."
        }
        image={section_aboutBanner}
      />
      <AboutMe />

      {/* CONTACT SECTION */}
      <SectionTitle
        title={"Contact"}
        subtitle={"Get in touch with me through email, call, or text."}
        image={section_contactBanner}
      />
      <Contact />
      <Footer />
    </main>
  );
}

export default Portfolio;
