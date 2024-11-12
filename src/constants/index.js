import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
 
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Testing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Designer, Frontend Developer",
    company_name: "Netverse Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2024",
    points: [
      "Conducting user research and usability testing to gather insights and inform design decisions.",
      "Designing and developing user-friendly, visually appealing web applications with a focus on seamless user experiences.",
      "Collaborating with cross-functional teams, including product managers and developers, to ensure cohesive design and functionality..",
      "Testing the designs post-development, gathering user feedback, and iterating to improve the overall design and user experience.",
    ],
  },
  {
    title: "Software Developer, Internship",
    company_name: "YatriFriendly",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Worked on developing the frontend for the admin section of the company’s website.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to ensure a seamless user experience.",
      "Implemented responsive design and ensured cross-browser compatibility for the admin interface.",
      "Tested the frontend post-development, gathered user feedback, and made improvements to enhance the design and user experience",
    ],
  },
  {
    title: "Business Analyst, Internship",
    company_name: "EduSkill",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2024 - March 2024",
    points: [
      "Completed both basic and advanced levels of Celonis Business Analysis training, showcasing proficiency in utilizing analytical tools for business applications",
      "Analyzed the PIZZERIA MAAMA MIA case study, gaining practical experience in applying theoretical concepts to real-world business challenges.",
      "Enhanced problem-solving skills through hands-on experience with data analysis and strategic decision-making.",
      "Developed strategic thinking abilities by evaluating business scenarios and deriving actionable insights to improve operational efficiency.",
    ],
  },
  /*{
    title: "",
    company_name: "",
    icon: meta,
    iconBg: "",
    date: "",
    points: [
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Travel App",
    description:
      "Web-based platform that allows users to search, book, and manage Travel Expenses from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "red-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sejal91803",
  },
  {
    name: "CakeCraft Bakery",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations and local experiences.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "red-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://www.figma.com/proto/3AdRiW1TSmGOOHxYSLOigq/CakeCraft?node-id=10-6535&node-type=canvas&t=PLAZ2JoLpe8Scy7M-1&scaling=min-zoom&content-scaling=fixed&page-id=10%3A38",
  },
  {
    name: "EcoConnect",
    description:
      "EcoConnect is a social media platform that provides live updates on global events and social causes, while also sharing fun and engaging content. It connects people to stay informed and involved.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "red-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://www.figma.com/proto/3AdRiW1TSmGOOHxYSLOigq/CakeCraft?node-id=10-6535&node-type=canvas&t=PLAZ2JoLpe8Scy7M-1&scaling=min-zoom&content-scaling=fixed&page-id=10%3A38",
  },
  {
    name: "BlinkIt Analysis",
    description:
      "A detailed Power BI dashboard for road accident analysis, featuring data cleaning, modeling, and custom KPIs to provide actionable insights and support data-driven decision-making for stakeholders.",
    tags: [
      {
        name: "PowerBi",
        color: "blue-text-gradient",
      },
    ],
    //image: jobit,
    source_code_link: "https://agro-tech-ai.vercel.app/",
  },
  {
    name: "Supermarket Analysis",
    description:
      "A comprehensive sales analysis dashboard for a supermarket, created using Power BI, featuring various KPIs, visualizations, and insights to support data-driven decision-making.",
    tags: [
      {
        name: "PowerBi",
        color: "blue-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://app.powerbi.com/view?r=eyJrIjoiMTQ0ODFlODUtYjI1MS00MjIyLTllOWQtNGM0NGZmZDFkYjI5IiwidCI6ImUxYmMxZmI3LTg2YzUtNDczYi04ZGUzLWIxOTAyY2U3YTJmYyJ9",
  },
  {
    name: "Road Accident Analysis",
    description:
      "An interactive Power BI dashboard for comprehensive road accident analysis, featuring data cleaning, modeling, and custom KPIs for detailed visualizations and informed decision-making.",
    tags: [
      {
        name: "PowerBi",
        color: "blue-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://app.powerbi.com/view?r=eyJrIjoiMTQ0ODFlODUtYjI1MS00MjIyLTllOWQtNGM0NGZmZDFkYjI5IiwidCI6ImUxYmMxZmI3LTg2YzUtNDczYi04ZGUzLWIxOTAyY2U3YTJmYyJ9",
  },
  {
    name: "Airline Management System",
    description:
      "The Airline Management System handles flight scheduling, ticket reservations, cancellations, customer support, staff management, and provides daily flight updates.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Workbench",
        color: "pink-text-gradient",
      },
    ],
    //image: jobit,
    source_code_link: "https://github.com/sejal91803",
  },
  {
    name: "Tourism and Travel Booking System",
    description:
      "The Online Tourism Management System is a desktop application that helps tourists book hotels, packages, and explore sites, simplifying and streamlining their travel operations.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Workbench",
        color: "pink-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://www.figma.com/proto/3AdRiW1TSmGOOHxYSLOigq/CakeCraft?node-id=10-6535&node-type=canvas&t=PLAZ2JoLpe8Scy7M-1&scaling=min-zoom&content-scaling=fixed&page-id=10%3A38",
  },
  {
    name: "PayKaro",
    description:
      "PayKaro is a web application that enables users to make payments, analyze spending based on personalized categories, and manage their financial plans with the help of a built-in generative AI bot.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "red-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sejal91803",
  },
  {
    name: "AgroFarm",
    description:
      "AgroFarm is a website that helps farmers boost income by sharing successful practices, connecting them with experienced farmers for advice, and providing tailored strategies for new and existing ventures.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "red-text-gradient",
      },
    ],
    //image: jobit,
    source_code_link: "https://agro-tech-ai.vercel.app/",
  },
  {
    name: "Comparative Analysis Of Automatic Detection Of Blood Cancer From Microscopic Images",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Image Processing",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Machin Learning Algotithms (CNN, KNN, etc)",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sejal91803",
  },
];

export { services, technologies, experiences, testimonials, projects };
