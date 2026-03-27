import Section from "./Section";
import Button from "./Button";
import Portfolio from "../assets/Portfolio.png";
import {
  Book,
  ChevronsRightLeftIcon,
  Info,
  Newspaper,
  Scroll,
  ScrollText,
  ToolCase,
} from "lucide-react";
import useText from "../hooks/useText";
import { useLocation } from "react-router-dom";
import { tech_stack } from "../constants/tech-stack";
import { experience } from "../constants/experience";
import { education } from "../constants/education";

const Aboutme = () => {
  const { animateOnLoad } = useText();
  const pathname = useLocation();
  return (
    <Section
      className={`pt-48`}
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="aboutme"
    >
      <div
        className={
          pathname.pathname === "/aboutme"
            ? `hidden`
            : `container mt-24 lg:mt-32 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`
        }
      >
        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1 className={`h2 font-bold mb-6 flex flex-wrap items-center`}>
            <span className="block pr-2">About Me</span>
            <span className="md:block hidden">
              <Info size={42} />
            </span>
            <span className="md:hidden">
              <Info size={32} />
            </span>
          </h1>
          <p
            className={`body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8"}`}
          >
            {
              "Hi, I am Full-stack software engineer specializing in mostly Frontend (React, Vue) and Backend (Node/Express). Currently, I am living in Sydney, Australia working as a frontend developer in AutechJobs. I am deeply passionate about solving problems by building scalable web applicaitons."
            }
          </p>
          <div className="flex flex-col justify-between sm:flex-row max-w-lg">
            <Button href={`/aboutme`}>
              <span>{`More About me ->`}</span>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            className="gradient-animation p-1 dark:border-n-8/50 border-n-1 backdrop-blur rounded-full sm:h-80 sm:w-80 h-64 w-64"
            src={Portfolio}
            alt="Profile Picture"
          />
        </div>
      </div>
      <div
        className={`${pathname.pathname !== "/aboutme" ? `hidden` : `container mt-24 lg:mt-32 flex flex-col-reverse md:flex gap-12 items-center transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}`}
      >
        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1 className={`h2 font-bold mb-6 flex flex-wrap items-center`}>
            <span className="block pr-2">Certification</span>
            <span className="md:block hidden">
              <ScrollText size={42} />
            </span>
            <span className="md:hidden">
              <ScrollText size={32} />
            </span>
          </h1>
          <ul
            className={`body-2 md:body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8`}
          >
            <li className="py-2 transition-colors hover:text-color-1">
              <a
                href="https://www.udemy.com/certificate/UC-779e4672-4f69-4dfa-a31e-ade5dd9da676/"
                target="_blank"
              >
                The Complete Full-Stack Web Development Bootcamp (JavaScript
                ES6, OAuth, React, Node, Express) - Angela Yu, Udemy
              </a>
            </li>
            <li className="py-2 transition-colors hover:text-color-1">
              <a
                href="https://www.freecodecamp.org/certification/jayanshrestha/responsive-web-design"
                target="_blank"
              >
                Responsive Web Design (Html, Css, and JavaScript)- FreeCodeCamp
              </a>
            </li>
          </ul>
        </div>
        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1 className={`h2 font-bold mb-6 flex flex-wrap items-center`}>
            <span className="block pr-2">Education</span>
            <span className="md:block hidden">
              <Book size={42} />
            </span>
            <span className="md:hidden">
              <Book size={32} />
            </span>
          </h1>
          <ul
            className={`body-2 md:body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8"}`}
          >
            {education.map((item) => {
              return (
                <>
                  {" "}
                  <li className="py-2">
                    <span className=" font-bold underline">
                      {item.title} {item.university} {item.date}
                    </span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1 className={`h2 font-bold mb-6 flex flex-wrap items-center`}>
            <span className="block pr-2">Experience</span>
            <span className="md:block hidden">
              <Newspaper size={42} />
            </span>
            <span className="md:hidden">
              <Newspaper size={32} />
            </span>
          </h1>
          <ul
            className={`body-2 md:body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8"}`}
          >
            {experience.map((item) => {
              return (
                <>
                  {" "}
                  <li className="py-2">
                    <span className="dark:text-slate-100 font-bold underline">
                      {item.title}
                    </span>
                    <br />
                    {item.date}
                  </li>
                  <li>
                    <ol className="py-2">
                      {item.resp.map((item) => {
                        return <li>• {item}</li>;
                      })}
                    </ol>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1 className={`h2 font-bold mb-6 flex flex-wrap items-center`}>
            <span className="block pr-2">Current Tech Stack</span>
            <span className="md:block hidden">
              <ToolCase size={42} />
            </span>
            <span className="md:hidden">
              <ToolCase size={32} />
            </span>
          </h1>
          <ul
            className={`body-2 md:body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8"}`}
          >
            {tech_stack.map((item) => {
              return (
                <li>
                  <span className="dark:text-slate-100 font-bold underline">
                    {item.title}
                  </span>{" "}
                  {item.tools}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1 className={`h2 font-bold mb-6 flex flex-wrap items-center`}>
            <span className="block pr-2">About Me</span>
            <span className="md:block hidden">
              <Info size={42} />
            </span>
            <span className="md:hidden">
              <Info size={32} />
            </span>
          </h1>
          <p
            className={`body-2 md:body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8"}`}
          >
            {
              "Hi, I am Full-stack software engineer specializing in mostly Frontend (React, Vue) and Backend (Node/Express). Currently, I am living in Sydney, Australia working as a frontend developer in AutechJobs. I am deeply passionate about solving problems by building scalable web applicaitons."
            }
            <br />
            <br />
            {
              "I enjoy building high-performance, scalable web applications with modern architectures. My experience spans from crafting responsive frontend interfaces using React and Vue to engineering robust serverless backend deployment using Nest JS and Koyeb. I have experience in building API integration, expertise with JavaScript (TypeScript), and working with a Agile team."
            }
            <br />
            <br />
            {
              "Moreover, I am proficient in backend solutions using Node/Express JS and PostgreSQL which enables me to build full-stack web application. "
            }
            <br />
            <br />
            {
              "Currently, I am looking forward to add expertise in Next JS, AWS Cloud Computing, and CI/CD pipelines using Google Cloud Build."
            }
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            className="gradient-animation p-1 dark:border-n-8/50 border-n-1 backdrop-blur rounded-full sm:h-80 sm:w-80 h-64 w-64"
            src={Portfolio}
            alt="Profile Picture"
          />
        </div>
      </div>
    </Section>
  );
};

export default Aboutme;
