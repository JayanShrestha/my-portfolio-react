import Domain from "../assets/Projects/DomainRank.png";
import Portfolio from "../assets/Projects/Portfolio.png";
import Keeper from "../assets/Projects/Keeper.png";

export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "1",
    title: "Blog",
    url: "/blog",
  },
  {
    id: "2",
    title: "About me",
    url: "#aboutme",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const projects = [
  {
    id: "0",
    title: "Domain Ranking Application",
    url: "https://domainranking.jayanshrestha.com/",
    frontendRepo:
      "https://github.com/JayanShrestha/Frontend-Domain-Ranking-Application",
    backendRepo:
      "https://github.com/JayanShrestha/Domain-Ranking-Application-backend",
    description:
      "A full-stack web app that visualizes Tranco domain rankings over time. Built with Vue.js, Tailwind CSS, and Chart.js, it allows users to input one or multiple domains and view their ranking history in a responsive chart.",
    tech: ["Vue", "Tailwind CSS", "Chart JS ", "Nest JS", "Neon PostgreSQL"],
    image: Domain,
  },
  // {
  //  id: "1",
  //  title: "Weather Application",
  //  url: "https://myweather.jayanshrestha.com/",
  //   description:
  //   "A weather application that can provide details about the current weather on the basis of current location or any location by search using OpenWeather APIs using Node/Express JS and React JS.",
  ////  tech: ["React", "Node/Express JS", "Tailwind CSS", "OpenWeather API"],
  // },
  {
    id: "1",
    title: "Portfolio",
    url: "https://jayanshrestha.com/",
    repo: "https://github.com/JayanShrestha/my-portfolio-react",
    description:
      "A portfolio created using React and tailwind css with custom hooks. It showcases the projects, experiences and education. This project was deployed on Cloudflare FaaS which performs CI/CD.",
    tech: ["React", "Tailwind CSS", "Figma", "CloudFlare"],
    image: Portfolio,
  },
  {
    id: "2",
    title: "Keeper App",
    url: "https://keeper.jayanshrestha.com/",
    repo: "https://github.com/JayanShrestha/Keeper-App",
    description:
      "A keeper application that uses React UseState to add the notes on Single Page Application. The notes can be deleted and added from the Input box.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    image: Keeper,
  },
];
