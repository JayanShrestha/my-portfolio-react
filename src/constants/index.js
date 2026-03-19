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
    description:
      "A full-stack web app that visualizes Tranco domain rankings over time. Built with Vue.js, Tailwind CSS, and Chart.js, it allows users to input one or multiple domains and view their ranking history in a responsive chart.",
    tech: ["Vue", "Tailwind CSS", "Chart JS ", "Nest JS", "Neon PostgreSQL"],
  },
  {
    id: "1",
    title: "Weather Application",
    url: "https://myweather.jayanshrestha.com/",
    description:
      "A weather application that can provide details about the current weather on the basis of current location or any location by search using OpenWeather APIs using Node/Express JS and React JS.",
    tech: ["React", "Node/Express JS", "Tailwind CSS", "OpenWeather API"],
  },
  {
    id: "2",
    title: "Portfolio",
    url: "https://jayanshrestha.com/",
    description:
      "A portfolio created using React and tailwind css with custom hooks. It showcases the projects, experiences and education. This project was deployed on Cloudflare PaaS which performs CI/CD on each repo update and deployement.",
    tech: ["React", "Tailwind CSS", "Figma", "CloudFlare"],
  },
  {
    id: "3",
    title: "Keeper App",
    url: "https://keeper.jayanshrestha.com/",
    description:
      "A keeper application that uses React UseState to add the notes on Single Page Application. The notes can be deleted and added from the Input box.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
];

export const blogs = [
  {
    id: "0",
    title:
      "Using RESEND API to create a simple email service in Node/Express JS",
    excerpt:
      "While working on contact me page for my portfolio, I came across RESEND API services for developers which provide simple email services across multiple platforms.",
    date: "March 19th, 2026",
    readTime: "5 min read",
    category: "Node/Express JS",
  },
  {
    id: "1",
    title: "Creating Reusable components for React Project for multiple usage",
    excerpt:
      "Another time saving factor while working on React Project is creating reusable components which can used multiple without hardcoding the same code over and over.",
    date: "March 12th, 2026",
    readTime: "8 min read",
    category: "React JS",
  },
];
