import Section from "./Section";
import Button from "./Button";
import { projects } from "../constants";
import Domainrank from "../assets/DomainRank.png";

const Projects = () => {
  return (
    <Section
      className="pt-48 "
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="projects"
    >
      <div className="container mt-24">
        <div className="h1 mb-6 flex">
          <span className="mx-auto">My Projects</span>
        </div>

        <div className="relative grid mt-6 md:grid-cols-3 gap-6 text-center">
          {projects.map((item, index) => {
            return (
              <div key={index} className="flex flex-wrap flex-col items-center">
                <img
                  className="h-64
                   w-128"
                  src={Domainrank}
                  alt="domain ranking app"
                />
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
export default Projects;
