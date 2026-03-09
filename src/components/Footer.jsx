import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col items-center justify-center p-2">
        <div className="flex flex-wrap items-center justify-center py-2">
          <a
            className="px-5"
            href="https://github.com/JayanShrestha"
            target="_blank"
          >
            <Github />
          </a>
          <a
            className="px-5"
            href="https://www.linkedin.com/in/jayan-shrestha/"
            target="_blank"
          >
            {" "}
            <Linkedin />
          </a>

          <a
            className="px-5"
            href="mailto:jayanshrestha055@gmail.com"
            target="_blank"
          >
            <Mail />
          </a>
        </div>
        <div>
          <p>Site is built using React, TailwindCss, Figma, Lucide-react</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
