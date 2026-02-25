import Section from "./Section";
import useText from "../hooks/useText";
import Typewriter from "typewriter-effect";
import { Github } from "lucide-react";

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
        className={`container mt-24 relative lg:mt-20 grid md:grid-cols-2 gap-12 items-center`}
      >
        <div className="relative z-1 max-w-5xl mx-auto text-center mb-16 md:mb-20  lg:mb:[6rem] ">
          <h1
            className={`transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "} h1 mb-6`}
          >
            Next Generation Software Engineer {""}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-color-6 via-color-5 to-color-1">
              Jayan Shrestha.
            </span>
          </h1>
          <p
            className={`body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "}`}
          >
            Sydney Based Full-Stack Software Engineer
            <Typewriter
              options={{
                strings: ["M.Tech (Software Engineering)", ""],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div
          className={`relative transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "}`}
        >
          <div className="relative bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-2xl p-8 border dark:border-n-8/50 border-n-1 backdrop-blur">
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
