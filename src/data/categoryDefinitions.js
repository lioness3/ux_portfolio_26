import roleIcon from "../assets/icons/Role.svg";
import problemIcon from "../assets/icons/Warning.svg";
import goalIcon from "../assets/icons/Goal.svg";
import researchIcon from "../assets/icons/Search.svg";
import painPointsIcon from "../assets/icons/PainPoint.svg";
import personaIcon from "../assets/icons/Persona.svg";
import wireframesIcon from "../assets/icons/Wireframe.svg";
import designSystemIcon from "../assets/icons/Design.svg";
import prototypesIcon from "../assets/icons/Prototype.svg";
import usabilityStudiesIcon from "../assets/icons/UsabilityStudy.svg";
import accessibilityIcon from "../assets/icons/Accessibile.svg";
import finalDesignIcon from "../assets/icons/FinalDesign.svg";
import userFeedbackIcon from "../assets/icons/Feedback.svg";
import takeawaysIcon from "../assets/icons/Takeaways.svg";
import nextStepsIcon from "../assets/icons/NextSteps.svg";

// this is for rendering the case study details card with the appropriate name and icon and tells the info card what type it should render.
//5 types: text, block, image, left button, center button
export const categoryDefinitions = {
  myRole: {
    type: "text",
    title: "My Role",
    icon: roleIcon,
  },
  problem: {
    type: "text",
    title: "Problem",
    icon: problemIcon,
  },
  goal: {
    type: "text",
    title: "Goal",
    icon: goalIcon,
  },
  userResearch: {
    type: "text",
    title: "User Research",
    icon: researchIcon,
  },
  painPoints: {
    type: "block",
    title: "Pain Points",
    icon: painPointsIcon,
  },
  persona: {
    type: "image",
    title: "Persona",
    icon: personaIcon,
  },
  wireframes: {
    type: "image",
    title: "Wireframes",
    icon: wireframesIcon,
  },
  designSystem: {
    type: "image",
    title: "Design System",
    icon: designSystemIcon,
  },
  prototypes: {
    type: "left button",
    title: "Prototypes",
    icon: prototypesIcon,
  },
  usabilityStudies: {
    type: "block",
    title: "Usability Studies",
    icon: usabilityStudiesIcon,
  },
  Accessibility: {
    type: "block",
    title: "Accessibility",
    icon: accessibilityIcon,
  },
  finalDesign: {
    type: "center button",
    title: "Final Design",
    icon: finalDesignIcon,
  },
  userFeedback: {
    type: "block",
    title: "User Feedback",
    icon: userFeedbackIcon,
  },
  takeaways: {
    type: "text",
    title: "Takeaways",
    icon: takeawaysIcon,
  },
  nextSteps: {
    type: "block",
    title: "Next Steps",
    icon: nextStepsIcon,
  },
};
