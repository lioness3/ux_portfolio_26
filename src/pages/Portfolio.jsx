import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CaseStudies from "../components/CaseStudies";
import section_banner from "../assets/images/section_banner.png";
import campstoreImg from "../assets/images/campstore.png";
import OHCImg from "../assets/images/oceanharbor.png";
import dineOrDitchImg from "../assets/images/dineorditch.png";
import thermostatImg from "../assets/images/thermostat.png";
import SOSImg from "../assets/images/SOS.png";
import inventoryImg from "../assets/images/inventory.png";
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

function Portfolio() {
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
    </main>
  );
}

export default Portfolio;
