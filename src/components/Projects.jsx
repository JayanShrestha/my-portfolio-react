import Section from "./Section";
import { projects } from "../constants";
import Card from "./Card";
import { BriefcaseBusinessIcon } from "lucide-react";
import { View } from "lucide-react";
import useText from "../hooks/useText";

const Projects = () => {
  const { animateOnLoad } = useText();
  const handleClick = (url) => {
    return window.open(url, "_blank", "noreferrer");
  };
  return (
    <Section
      className="pt-48"
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="projects"
    >
      <div
        className={`container mt-24 lg:mt-32 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="h2 font-bold mb-6 flex">
          <span className="flex flex-wrap items-center">
            <p className="pr-2">Featured Projects {`   `}</p>
            <span className="md:hidden">
              <BriefcaseBusinessIcon size={32} />
            </span>
            <span className="hidden md:block">
              <BriefcaseBusinessIcon size={42} />
            </span>
          </span>
        </div>

        <div className="relative grid md:grid-cols-2 gap-12 ">
          {projects.map((item, index) => {
            return (
              <Card id={index}>
                <div
                  className="flex flex-wrap flex-col"
                  onClick={() => handleClick(item.url)}
                >
                  <p className="h6 body-1"> {item.title}</p>
                  <p className="text-n-8/50 dark:text-n-1/50">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap justify-between py-3">
                    {item.tech.map((item) => {
                      return (
                        <span className="border border-color-1 p-2 m-2 rounded-2xl text-color-1 text-sm">
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex py-2">
                    <div className="flex flex-col justify-between items-center sm:flex-row max-w-lg">
                      {" "}
                      <div className="flex flex-wrap justify-center items-center">
                        <View />
                        <a
                          className="pl-2 hover:text-n-1"
                          href={item.url}
                          target="_blank"
                        >
                          View Project Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
export default Projects;
