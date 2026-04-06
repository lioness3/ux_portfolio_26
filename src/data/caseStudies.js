//data stucture for case studies

//icons to display with case study categories
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

//images
import campstoreImg from "../assets/images/campstore.png";
import OHCImg from "../assets/images/oceanharbor.png";
import dineOrDitchImg from "../assets/images/dineorditch.png";
import thermostatImg from "../assets/images/thermostat.png";
import SOSImg from "../assets/images/SOS.png";
import inventoryImg from "../assets/images/inventory.png";
import personaCampStore from "../assets/images/persona.png";
import campstoreHeaderImg from "../assets/images/campstorePreview-doublescreen.png";

import campstoreWireframe1 from "../assets/images/campstore_wireframe1.png";
import campstoreWireframe2 from "../assets/images/campstore_wireframe2.png";
import campstoreWireframe3 from "../assets/images/campstore_wireframe3.png";
import campstoreWireframe4 from "../assets/images/campstore_wireframe4.png";
import campstoredesign1 from "../assets/images/campstore_designsystem1.png";
import campstoredesign2 from "../assets/images/campstore_designsystem2.png";

import campstorelofi from "../assets/images/campstore_lofi_prototype.png";

export const caseStudies = [
  {
    mainImage: campstoreImg,
    caseStudyHeaderImage: campstoreHeaderImg,
    bgColor: "#8DA293",
    title: "Camp Store App",
    type: "UX Case Study",
    description: "UX Design",
    summary:
      "The Camp Store app gives campers a faster, easier way to shop by letting them browse items, check product details, and place orders without waiting in line. It also keeps users informed about current inventory, special offers, and upcoming events at their campground.",
    catchPhrase: "Camp More, Stress Less!",
    timeline: "4 Months",
    tools: "Figma",
    palette: [
      "rgba(217, 199, 162, 0.1)",
      "rgba(230, 126, 34, 0.1)",
      "rgba(46, 83, 57, 0.1)",
      "rgba(0, 0, 0, 0.1)",
    ],

    categories: {
      myRole: {
        type: "text",
        title: "My Role",
        icon: roleIcon,
        headline: "Lead UX Designer",
        description:
          "I was the Lead UX Designer for this project. I guided the design process from early research to polished prototypes. My work included conducting user research, shaping user stories, organizing the information architecture, and creating wireframes and high-fidelity designs in Figma.",
      },
      problem: {
        type: "text",
        title: "Problem",
        icon: problemIcon,
        headline: "Waiting Instead of Relaxing",
        description:
          "Campers often face long lines at the camp store, which takes time away from relaxing and enjoying nature. The lack of a convenient ordering system creates frustration and disrupts the overall camping experience.",
      },
      goal: {
        type: "text",
        title: "Goal",
        icon: goalIcon,
        headline: "Create an Accessible App",
        description:
          "Create a mobile app that enables campers to place store orders ahead of time and access campground event information directly from their phones. More time for s’mores, less time in line.",
      },
      userResearch: {
        type: "text",
        title: "User Research",
        icon: researchIcon,
        headline: "Reduce Bias",
        description:
          "After living in a campground for a summer, I developed two user personas based on real people I met there. I intentionally included underrepresented demographics to reduce bias and reflect a broader range of abilities and perspectives. \n\nThese personas informed a focused, moderated usability study with five participants ages 30–75, including an individual with a motor function impairment. The study aimed to quickly validate the low-fidelity prototype’s ordering process while collecting insights tied to key business metrics: increasing sales and event attendance while reducing delivery time.",
      },
      painPoints: {
        type: "block",
        title: "Pain Points",
        icon: painPointsIcon,
        items: [
          {
            title: "Live Inventory",
            description:
              "Campers can not see whether items are in stock before hiking to the store.",
          },
          {
            title: "Pick Up Orders",
            description:
              "Campers must visit the store multiple times to check if orders are ready.",
          },
          {
            title: "Long Lines",
            description: "Checkout lines grow during peak hours.",
          },
          {
            title: "Tiny Labels",
            description:
              "Small text and unclear pricing make products diffiuclt to read.",
          },
        ],
      },
      persona: {
        type: "image",
        title: "Persona",
        icon: personaIcon,
        images: [personaCampStore],
        imageDescriptions: ["Persona Card Created By Joann Carter"],
      },
      wireframes: {
        type: "image",
        title: "Wireframes",
        icon: wireframesIcon,
        images: [
          campstoreWireframe1,
          campstoreWireframe2,
          campstoreWireframe3,
          campstoreWireframe4,
        ],
        imagesIntro:
          "Paper sketches were translated into digital wireframes to define the structure of the ordering flow and event browsing experience.",
        imageDescriptions: ["Responsive Wireframes"],
      },
      designSystem: {
        type: "image",
        title: "Design System",
        icon: designSystemIcon,
        images: [campstoredesign1, campstoredesign2],
        imageDescriptions: ["Example Components", "Sticker Sheet"],
      },
      prototypes: {
        type: "prototype",
        title: "Prototype",
        icon: prototypesIcon,
        description:
          "This is the first prototype for the camp store. The bottom navigation tabs are Home, Events, Weather, and Profile. The cart is accessed from the top right of the home page.",
        buttonText: "Lo-Fi Prototype",
        link: "https://www.figma.com/proto/jriTfKyq2FG2ypO0JcesR7/CAMP-STORE-APP-prototype-update.1?node-id=0-1&t=NivYPPN1VYXImYGF-1",
        images: [campstorelofi],
      },
      usabilityStudies: {
        type: "block studies",
        title: "Usability Studies",
        icon: usabilityStudiesIcon,
        headline: "Two Rounds",
        description:
          "I carried out two rounds of usability studies. Insights from the first study helped guide the designs from wireframes to mockups. The second study used a high-fidelity prototype to reveal what areas needed refining.",
        items: [
          {
            title: "Round 1 Findings",
            headline: "Low-Fidelity Prototype",
            findings: [
              "Users need more detail to understand the app.",
              "Users want to navigate between event dates.",
              "Users find the events exciting.",
            ],
          },
          {
            title: "Round 2 Findings",
            headline: "High-Fidelity Prototype",
            findings: [
              "The cart icon is confusing.",
              "The profile tab is mislabeled.",
            ],
          },
        ],
      },
      Accessibility: {
        type: "block",
        title: "Accessibility Considerations",
        icon: accessibilityIcon,
        items: [
          {
            title: "Contrasting Colors",
            description:
              "High contrast colors were used to enhance readability and support users with visual impairments.",
          },
          {
            title: "Large Buttons",
            description:
              "Buttons met the 48 x 48 pixel minimum touch target size to support accessible interaction.",
          },
          {
            title: "Information Hierarchy",
            description:
              "Consistent navigation and information hierarchy were used to reduce cognitive load.",
          },
        ],
      },
      finalDesign: {
        type: "center button",
        title: "Final Design",
        icon: finalDesignIcon,
        buttonText: "View Prototype",
        link: "",
        buttonDescription: "View the final prototype on Figma.",
        images: [],
      },

      userFeedback: {
        type: "feedback",
        title: "User Feedback",
        icon: userFeedbackIcon,
        items: [
          "If I was at a campground with my kids, this would make things easier!",
          "Simple… intuitive and easy!",
        ],
      },
      takeaways: {
        type: "text",
        title: "Takeaways",
        icon: takeawaysIcon,
        headline: "Realistic Content Matters",
        description:
          "I learned that low fidelity placeholders (text blocks and wireframe image boxes) were not intuitive for the user during the initial testing phase. Realistic content is essential for accurate user feedback.",
      },
      nextSteps: {
        type: "block",
        title: "Next Steps",
        icon: nextStepsIcon,
        items: [
          {
            title: "More Testing",
            description:
              "Conduct follow-up usability testing on the newest designs on all screen sizes and platforms.",
          },
          {
            title: "Field Testing",
            description:
              "Deploy the prototype at a campground to test the functionality outdoors and in real time.",
          },
          {
            title: "Revenue",
            description:
              "Measure increases in store sales, event participation, and user retention.",
          },
        ],
      },
    },
  },

  {
    mainImage: OHCImg,
    bgColor: "#A2C9C9",
    title: "Ocean Harbor Condominium",
    description: "Full Stack Development.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: {
        headline: "",
        description: "",
      },
      goal: {
        headline: "",
        description: "",
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
    mainImage: dineOrDitchImg,
    bgColor: "#FFDFB1",
    title: "Dine or Ditch",
    description: "Full Stack Development.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: {
        headline: "",
        description: "",
      },
      goal: {
        headline: "",
        description: "",
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
    mainImage: thermostatImg,
    bgColor: "#E7E7E7",
    title: "Thermostat",
    description: "Embedded Systems.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: {
        headline: "",
        description: "",
      },
      goal: {
        headline: "",
        description: "",
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
    mainImage: SOSImg,
    bgColor: "#D6ABA5",
    title: "SOS",
    description: "Embedded Systems.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: {
        headline: "",
        description: "",
      },
      goal: {
        headline: "",
        description: "",
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
    mainImage: inventoryImg,
    bgColor: "#D6ABA5",
    title: "Inventory",
    description: "Full Stack Development.",

    categories: {
      myRole: { headline: "", description: "" },
      problem: {
        headline: "",
        description: "",
      },
      goal: {
        headline: "",
        description: "",
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
];
