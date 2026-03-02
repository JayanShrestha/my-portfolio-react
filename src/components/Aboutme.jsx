import Section from "./Section";
import Button from "./Button";
import Portfolio from "../assets/Portfolio.png";

const Aboutme = () => {
  return (
    <Section
      className="pt-48 "
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="aboutme"
    >
      <div
        className={`container mt-24 lg:mt-32 grid md:grid-cols-2 gap-12 items-center`}
      >
        <div className="relative flex items-center justify-center">
          <img
            className="gradient-animation p-1 dark:border-n-8/50 border-n-1 backdrop-blur rounded-full sm:h-80 sm:w-80 h-64 w-64"
            src={Portfolio}
            alt="Profile Picture"
          />
        </div>

        <div className="relative z-1 max-w-5xl mx-auto mb-16 md:mb-8">
          <h1 className={`h1 mb-6`}>
            <span className="block ">About Me</span>
          </h1>
          <p
            className={`body-1 max-w-3xl mx-auto mb-6 text-n-8/50 dark:text-n-1/50 lg:mb-8"}`}
          >
            {
              "Hi, I am Full-stack software engineer with over 1 years of experience specializing in mostly Frontend (React, Vue) and Backend (Node/Express). Currently, I am living in Sydney, Australia working as a frontend developer in AutechJobs. I am deeply passionate about solving problems by building scalable web applicaitons. When I am not working, you can usually find me in gym or binging Netflix :)."
            }
          </p>
          <Button href={`/aboutme`}>
            <span>{`More About me ->`}</span>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Aboutme;
