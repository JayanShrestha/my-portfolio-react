import Section from "./Section";
import Button from "./Button";
import { Mail } from "lucide-react";
import useText from "../hooks/useText";

const Contact = () => {
  const { animateOnLoad } = useText();
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="contact"
    >
      <div
        className={`container mt-24 lg:mt-32 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "}`}
      >
        <div className="flex flex-wrap items-center justify-center md:pt-16 pt-24">
          <h1 className="h1 text-center">Let's Work Together</h1>
          <div className="md:p-16">
            {" "}
            <p className="p-2 body-1 dark:text-n-1/50 text-n-8/50 text-center md:px-24">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision and build JavaScript
              Ecosystem. Feel free to email me at jayanshrestha055@gmail.com or
              by clicking the "Get in Touch" button below.
            </p>
            <div className="flex flex-wrap justify-center items-center p-16">
              <Button className="mt-5" href="/contactme">
                <div className="flex flex-wrap justify-center items-center">
                  <Mail />
                  <span className="pl-2 text-xs md:text-base">
                    Get In Touch
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
