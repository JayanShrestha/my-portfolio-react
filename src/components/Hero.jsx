import Section from "./Section";
import useText from "../hooks/useText";
import Typewriter from "typewriter-effect";
import Portfolio from "../assets/Portfolio.png";

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
      <div className="container relative mt-96 lg:mt-60">
        <div className="relative z-1 max-w-5xl mx-auto text-center mb-16 md:mb-20  lg:mb:[6rem] ">
          <h1
            className={`transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "} h1 mb-6`}
          >
            Hi, I am {""}
            <span className="text-color-1 inline-block">Jayan Shrestha.</span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8">
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
      </div>
    </Section>
  );
};
export default Hero;
