import { useLocation } from "react-router-dom";
import { blog_post } from "../constants/blog-post";
import { CalendarCheck } from "lucide-react";
import { Clock } from "lucide-react";
import useText from "../hooks/useText";
import Section from "./Section";

const Posts = () => {
  const { animateOnLoad } = useText();
  const pathname = useLocation();
  const post = blog_post.filter((item) => {
    return pathname.pathname === item.url;
  });
  return (
    <Section
      className="pt-48"
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
    >
      <div
        className={`container md:px-24 mt-24 lg:mt-64 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-48`}
      >
        <div
          className="px-8 lg:px-4 md:p-16"
          //dangerouslySetInnerHTML={{ __html: blog_post[0].content }}
        >
          <div className="grid md:flex gap-4 items-center">
            <img src={post[0].img} className="h-24 w-24 rounded-full" />
            <h1 className="h2 font-bold mt-4">{post[0].title}</h1>
          </div>

          <div className="flex flex-wrap mt-2 ">
            <div className="flex flex-wrap">
              <CalendarCheck /> <span className="px-2">{post[0].date}</span>
            </div>
            <div className="flex flex-wrap">
              <Clock />
              <span className="px-2">{post[0].readTime}</span>
            </div>
          </div>
          <p class="mb-4 body-1 text-n-4 mt-6">{post[0].excerpt}</p>
          {post[0].content}
        </div>
      </div>
    </Section>
  );
};
export default Posts;
