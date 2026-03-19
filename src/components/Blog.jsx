import useText from "../hooks/useText";
import Section from "./Section";
import { blogs } from "../constants";
import Card from "./Card";
import { CalendarCheck } from "lucide-react";
import { Clock } from "lucide-react";
import Button from "./Button";

const Blog = () => {
  const { animateOnLoad } = useText();
  return (
    <Section
      className="pt-48"
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="Blog"
    >
      <div
        className={`container mt-24 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-48`}
      >
        <div className="flex flex-wrap flex-col gap-4 p-24 md:p-16">
          <h1 className="h1">Blog</h1>
          <p className="body-1">
            Thoughts on software engineering/Web development, lessons learned,
            and technical deep-dives. I write challenges I face ant the
            solutions I discover along the way.
          </p>
        </div>
        <div className="relative grid md:grid-cols-2 gap-12 ">
          {blogs.map((item, index) => {
            return (
              <Card id={index}>
                <div className="flex flex-wrap flex-col">
                  <p className="border-none rounded-2xl bg-color-1/50 w-fit p-2 ">
                    {item.category}
                  </p>
                  <p className="h6 mt-2"> {item.title}</p>
                  <p className="text-n-8/50 dark:text-n-1/50 mt-2">
                    {item.excerpt}
                  </p>
                  <div className="flex flex-wrap mt-2 justify-between">
                    <div className="flex flex-wrap">
                      <CalendarCheck />{" "}
                      <span className="px-2">{item.date}</span>
                    </div>
                    <div className="flex flex-wrap">
                      <Clock />
                      <span className="px-2">{item.readTime}</span>
                    </div>
                  </div>
                  <Button className="mt-2">
                    <span>{"Read more ->"}</span>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
export default Blog;
