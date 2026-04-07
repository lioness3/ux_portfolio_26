import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CaseStudies from "../components/CaseStudies";
import section_banner from "../assets/images/section-banner.png";
import section_about_banner from "../assets/images/Section-about-banner.png";
import section_contact_banner from "../assets/images/section_contact_banner.png";
import section_resume_banner from "../assets/images/section-resume-banner.png";
import MyProcess from "../components/MyProcess";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
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
      <Hero />
      <SectionTitle
        title={"Case Studies"}
        subtitle={
          "A mix of real-world and continuing education projects that I have collected over the past few years. "
        }
        image={section_banner}
      />
      <CaseStudies studies={studies} />
      <SectionTitle
        title={"My Process"}
        subtitle={"A look into how I approach design challenges."}
        image={section_banner}
      />
      <MyProcess />
      <SectionTitle
        title={"About me"}
        subtitle={
          "Learn more about my background, skills, and experience as a UX designer."
        }
        image={section_about_banner}
      />
      <AboutMe />
      <SectionTitle
        title={"Resume"}
        subtitle={
          "Download my resume to learn more about my background, skills, and experience."
        }
        image={section_resume_banner}
      />
      <SectionTitle
        title={"Contact"}
        subtitle={"Get in touch with me through email, text, or call."}
        image={section_contact_banner}
      />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Portfolio;
