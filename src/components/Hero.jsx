import Section from "./Section";
import useText from "../hooks/useText";

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
            Hi, My Name is Jayan Shrestha.
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Sydney Based Software Engineer
          </p>
        </div>
      </div>
    </Section>
  );
};
export default Hero;
