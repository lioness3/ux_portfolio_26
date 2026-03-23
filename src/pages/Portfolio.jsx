import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CaseStudies from "../components/CaseStudies";
import section_banner from "../assets/images/section-banner.png";
import section_resume_banner from "../assets/images/section-resume-banner.png";
import MyProcess from "../components/MyProcess";

function Portfolio({ studies }) {
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
        image={section_resume_banner}
      />
      <SectionTitle
        title={"Resume"}
        subtitle={
          "Download my resume to learn more about my background, skills, and experience."
        }
        image={section_resume_banner}
      />
    </main>
  );
}

export default Portfolio;
