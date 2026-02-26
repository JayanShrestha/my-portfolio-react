import Section from "./Section";
import useText from "../hooks/useText";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Projector } from "lucide-react";

const Hero = () => {
  const { animateOnLoad } = useText();

  return (
    <Section
      className="pt-48 "
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="hero"
    >
      <div
        className={`container mt-24 lg:mt-32 grid md:grid-cols-2 gap-12 items-center`}
      >
        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1
            className={`transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "} h1 mb-6`}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-color-6 via-color-5 to-color-1">
              I'm Jayan Shrestha.
            </span>
            <span className="block">
              Full-Stack Software Engineer
            </span>
            
          </h1>
          <p
            className={`body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "}`}
          >
            
            
            <Typewriter  onInit={(typewriter) => {
    typewriter
      .pauseFor(2000) // Pause for 2 seconds
      .start();
  }}
  options={{
    strings:["Sydney based Full Stack Web Developer","M.Tech in Software Engineering","Freelance Frontend Developer at Au Tech Jobs"],
    autoStart: true,
    loop: true,
    cursor: "|",
     delay: 75,
  }}
/>
        {'Building high-performance web applications with modern architectures. Focusing on scalability, developer experience, and pixel-perfect user interfaces.'}
          </p>
            <div className="flex flex-col justify-between sm:flex-row max-w-lg">
        <Button href="https://github.com/JayanShrestha" target="_blank">
       
          <div className="flex flex-wrap justify-center items-center"><Github/><p className="pl-2">Github</p></div>
        
        </Button>
      
        <Button href="https://www.linkedin.com/in/jayan-shrestha/" target="_blank">
       
          <div className="flex flex-wrap justify-center items-center"><Linkedin/><p className="pl-2">LinkedIn</p></div>
        
        </Button>
        <Button href="#projects">
       
          <div className="flex flex-wrap justify-center items-center"><Projector/><p className="pl-2">Projects</p></div>
        
        </Button>
            
        
            
          </div>
          
        </div>
        <div
          className={`relative transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "}`}
        >
          <div className="relative gradient-animation dark:border-n-8/50 border-n-1 backdrop-blur">
            <div className="dark:bg-n-8/50 bg-n-1 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-400 font-mono text-sm">
                  &gt;_ terminal
                </span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;_</span>
                  <span className="">npm install skill-set</span>
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Installing dependencies...
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ React, TypeScript, Node.js
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Ready to build amazing things!
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    
    </Section>
    
  );
};
export default Hero;
