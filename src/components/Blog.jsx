import useText from "../hooks/useText";
import Section from "./Section";
import { blog_post } from "../constants/blog-post";
import Card from "./Card";
import { CalendarCheck } from "lucide-react";
import { Clock } from "lucide-react";
import Button from "./Button";

const Blog = () => {
  const { animateOnLoad } = useText();
  const handleClick = (url) => {
    return window.open(url, "_self");
  };
  return (
    <Section
      className="pt-48"
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="Blog"
    >
      <div
        className={`container md:px-24 mt-24 lg:mt-64 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-48`}
      >
        <div className="flex flex-wrap flex-col gap-4 p-8 w-full bg-color-1/20 rounded-2xl ">
          <h1 className="h1">Blogs</h1>
          <p className="body-2 text-n-4">
            Thoughts on software engineering/Web development, lessons learned,
            and technical deep-dives. I write challenges I face and the
            solutions I discover along the way.
          </p>
        </div>
        <div className="relative grid gap-2 mt-16 ">
          {blog_post
            .slice(0)
            .reverse()
            .map((item, index) => {
              return (
                <Card id={index}>
                  <div
                    className="flex flex-wrap flex-col"
                    onClick={() => handleClick(item.url)}
                  >
                    <div className=" grid md:flex gap-2">
                      <div className="flex gap-4">
                        <img
                          src={item.img}
                          className="h-12 w-12 rounded-full"
                        />
                        <p className="border-none rounded-2xl bg-color-1/50 w-fit p-2 text-slate-100 ">
                          {item.category}
                        </p>
                      </div>

                      <p className="h6 mt-2"> {item.title}</p>
                    </div>
                    <p className="text-n-8/50 dark:text-n-1/50 mt-2">
                      {item.excerpt}
                    </p>
                    <div className="grid gap-2 md:flex flex-wrap mt-2 justify-between">
                      <span className="flex text-xs md:body-2">
                        <div className="flex flex-wrap">
                          <CalendarCheck />{" "}
                          <span className="px-2">{item.date}</span>
                        </div>
                        <div className="flex flex-wrap">
                          <Clock />
                          <span className="px-2">{item.readTime}</span>
                        </div>
                      </span>
                      <Button className="w-fit md:-mt-2" href={item.url}>
                        <span className="text-xs">{"Read more ->"}</span>
                      </Button>
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
export default Blog;
