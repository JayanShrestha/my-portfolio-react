import Domain from "../assets/Projects/DomainRank.png";
import Portfolio from "../assets/Projects/Portfolio.png";
import Keeper from "../assets/Projects/Keeper.png";
import weather from "../assets/Projects/WeatherApp.png";
export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#projects",
    surl: "/#projects",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
    surl: "/#skills",
  },
  {
    id: "2",
    title: "Blog",
    url: "/blog",
    surl: "/blog",
  },
  {
    id: "3",
    title: "About me",
    url: "#aboutme",
    surl: "/#aboutme",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
    surl: "/#contact",
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
      "A full-stack web app that visualizes Tranco domain rankings over time, and it allows users to input one or multiple domains and view their ranking history in a responsive chart.",
    tech: ["Vue", "Tailwind CSS", "Nest JS"],
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
      "A portfolio created using React and tailwind css with custom hooks. It showcases the projects, experiences, education, and certification. This project also host my blog posts.",
    tech: ["React", "Tailwind CSS", "Figma"],
    image: Portfolio,
  },
  {
    id: "2",
    title: "Weather Application",
    url: "https://weatherapp.jayanshrestha.com/",
    frontendRepo: "https://github.com/JayanShrestha/Weather-App-Frontend",
    backendRepo: "https://github.com/JayanShrestha/Weather-App-Backend",
    description:
      "A Weather Application built on React, tailwind, framer-motion, and meteocons on frontend using GoogleMap API, and Node/Express.js on backend using Openweather API.",
    tech: ["React", "Node JS ", "Express JS"],
    image: weather,
  },
];
