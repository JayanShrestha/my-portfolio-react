import Section from "./Section";
import useText from "../hooks/useText";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import Portfolio from "../assets/Portfolio.png";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Projector } from "lucide-react";

const Hero = () => {
  const { animateOnLoad } = useText();

  return (
    <Section crosses crossesOffset="lg:translate-y-20" id="hero">
      <div
        className={`container w-full mt-24 md: lg:mt-32 flex flex-col xl:flex-row gap-16 items-center justify-center`}
      >
        <div className="relative z-1 max-w-2xl mb-16 md:mb-8 ">
          <h1
            className={`transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "} h2 mb-6`}
          >
            👋
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-color-6 via-color-5 to-color-1">
              Hi, I'm Jayan Shrestha.
            </span>
            <span className="block h3">Software Engineer</span>
          </h1>
          <p
            className={`body-2 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "}`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000) // Pause for 2 seconds
                  .start();
              }}
              options={{
                strings: [
                  "A T-Shaped Full Stack Software Developer",
                  "M.Tech in Software Engineering",
                  "Freelance Frontend Developer at Au Tech Jobs",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 75,
              }}
            />
            {
              "Building high-performance web applications mainly with React, TypeScript, Node.js, and PostgreSQL, and focusing on scalability, and production-ready software."
            }
          </p>
          <div
            className={`flex flex-col justify-between sm:flex-row max-w-lg transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} `}
          >
            <Button href="https://github.com/JayanShrestha" target="_blank">
              <div className="flex flex-wrap justify-center items-center">
                <Github />
                <p className="pl-2">Github</p>
              </div>
            </Button>

            <Button
              href="https://www.linkedin.com/in/jayan-shrestha/"
              target="_blank"
            >
              <div className="flex flex-wrap justify-center items-center">
                <Linkedin />
                <p className="pl-2">LinkedIn</p>
              </div>
            </Button>
            <Button href="#projects">
              <div className="flex flex-wrap justify-center items-center">
                <Projector />
                <p className="pl-2">Projects</p>
              </div>
            </Button>
          </div>
        </div>
        <div
          className={`relative transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "}`}
        >
          <div className="relative flex items-center justify-center">
            <img
              className="gradient-animation p-1 dark:border-n-8/50 border-n-1 backdrop-blur rounded-full sm:h-72 sm:w-72 h-64 w-64"
              src={Portfolio}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Hero;
