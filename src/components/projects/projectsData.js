// src/components/projects/projectsData.js
import projectExam2 from "../../assets/pe2.png";
import frameworks from "../../assets/frameworks.png";
import sp2 from "../../assets/sp2.png";

export const projectsData = [
  {
    id: 1,
    title: "Project exam 2",
    image: projectExam2,
    alt: "Project exam 2 screenshot",
    description:
      "This project focuses on building a front-end for Holidaze, a new accommodation booking site, utilizing React and Material UI to deliver a modern user experience. The application consists of both customer and admin interfaces, allowing users to view, search, and book venues, while venue managers can register, manage their listings, and access booking details. The project adheres to technical requirements, including the use of approved frameworks, and features links to project management tools, design prototypes, and hosted demos. This work highlights my development capabilities and emphasis on creating an intuitive user experience",
    repo: "https://github.com/Ramsnes/semester_project_2_resit",
    deployment: "https://semester-2-resit.netlify.app/",
  },
  {
    id: 2,
    title: "Javascript frameworks CA",
    image: frameworks,
    alt: "JS frameworks screenshot",
    description:
      "eCommerce Store Application This eCommerce store, built with React and the Noroff API, features a responsive design including a homepage with all products and a search bar, a product page with detailed information and an Add to Cart button, a cart page listing items with a total amount and checkout option, a checkout success page confirming orders and clearing the cart, and a contact page with a validated contact form. The app uses React Router for navigation and state management for the shopping cart, showcasing my skills in API integration and responsive design.",
    repo: "https://github.com/Ramsnes/frameworks-CA",
    deployment: "https://venerable-lokum-7370ff.netlify.app/",
  },
  {
    id: 3,
    title: "Semester project 2",
    image: sp2,
    alt: "Semester project 2 screenshot",
    description:
      "This project focuses on developing a front-end for an auction website that enables users to list items for bidding and participate in auctions. Utilizing JavaScript for functionality and SASS for styling, the application allows registered users to manage their listings and bids while permitting non-registered users to browse available items. New users begin with 1000 credits, which can be earned through selling items or used for bidding. The project complies with specified technical restrictions and includes links to essential project management tools, design prototypes, and a live demo, demonstrating my front-end development capabilities.",
    repo: "https://github.com/Ramsnes/semester_project_2_resit",
    deployment: "https://app.netlify.com/sites/semester-2-resit/overview",
  },
];
