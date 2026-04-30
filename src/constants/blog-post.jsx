import Using_Resend_Api from "../Blogcomponent/Using-Resend-Api";
import Reusable_Components from "../Blogcomponent/Reusable-Components";
import Cold_start from "../Blogcomponent/Cold-start-parallel-processing";
import react from "../assets/Blogs/Logo/React.png";
import node from "../assets/Blogs/Logo/Node.png";
import nest from "../assets/Blogs/Logo/Nest.jpg";
export const blog_post = [
  {
    id: "0",
    title:
      "Using RESEND API to create a simple email service in Node/Express JS and deploy on Koyeb",
    excerpt:
      "While working on contact me page for my portfolio, I came across RESEND API services for developers which provide simple email services across multiple platforms.",
    date: "March 27th, 2026",
    readTime: "5 min read",
    category: "Node/Express JS",
    url: "/blog/Using-Resend-Api",
    content: <Using_Resend_Api />,
    img: node,
  },
  {
    id: "1",
    title: "Creating Reusable components for React Project for multiple usage",
    excerpt:
      "Another time saving factor while working on React Project is creating reusable components which can used multiple without hardcoding the same code over and over. Components are dynamic with the help of props.",
    date: "April 3rd, 2026",
    readTime: "4 min read",
    category: "React JS",
    url: "/blog/Reusable-Components",
    content: <Reusable_Components />,
    img: react,
  },
  {
    id: "2",
    title:
      "Problem on Koyeb: CORS, Cold starts & 10x Faster Parallel Processing Fix",
    excerpt:
      "Have you ever wondered that the first few fetch requests always failed, but every request after that worked flawlessly. No errors in logs. No crashes. No exceptions. Just silent failures.",
    date: "April 12th, 2026",
    readTime: "5 min read",
    category: "Nest JS",
    url: "/blog/Cold-start",
    content: <Cold_start />,
    img: nest,
  },
];
