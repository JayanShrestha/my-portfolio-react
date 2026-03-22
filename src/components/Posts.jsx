import useText from "../hooks/useText";
import Section from "./Section";
import { blog_post } from "../constants/blog-post";
import { CalendarCheck } from "lucide-react";
import { Clock } from "lucide-react";
import { useLocation } from "react-router-dom";
import Resend from "../assets/Blogs/Resend.png";

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
        className={`container mt-8 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-48`}
      >
        <div
          className="px-8 lg:px-4 md:p-16"
          //dangerouslySetInnerHTML={{ __html: blog_post[0].content }}
        >
          <h1 className="h2 font-bold mt-4">{post[0].title}</h1>
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
          <div className="flex flex-col py-4">
            <h3 class="text-xl font-semibold mt-6 mb-2">
              1. Getting started with the backend
            </h3>
            <p className="mb-4 body-1 text-n-4">
              First, we need to start the node project into the directory where
              you want to build your project (assuming Node JS is already
              installed, if not install Node JS and use command node -v to
              confirm successful installation).
            </p>
            <p class="mt-6 body-1 text-n-4">Here is an example:</p>
            <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
              <code>
                mkdir contact-backend; <br></br>cd contact-backend;<br></br>
                npm init -y;// default configuration file
              </code>
            </pre>
          </div>

          <div className="flex flex-col py-4">
            <h3 class="text-xl font-semibold mt-6 mb-2">
              2. Create account on RESEND API
            </h3>
            <p className="mb-4 body-1 text-n-4">
              Creat an account on{" "}
              <a href="https://resend.com/" className="color-1 font-bold">
                RESEND API
              </a>{" "}
              using gmail or github account. Click on API keys from the
              dashboard which prompts you to create API key. Setup the name and
              save the key on notepad or somewhere safe because once it is
              created you can neither edit or view it. If forgotten or
              misplaced, delete the API key and create a new one again.(save at
              .env file at your project location)
            </p>
            <img
              src={Resend}
              alt="Resend api picture"
              className="border rounded-lg"
            />
          </div>
          <div className="flex flex-col py-4">
            <h3 class="text-xl font-semibold mt-6 mb-2">
              3. Installing the packages for project{" "}
            </h3>
            <p className="mb-4 body-1 text-n-4">
              Install the following packages inside the terminal of project
              location created.
            </p>
            <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
              <p>npm i express cors dotenv resend;</p>
            </pre>
          </div>
          <div>
            <h3 class="text-xl font-semibold mt-6 mb-2">
              4. Code to build API in index.js
            </h3>
            <p className="mb-4 body-1 text-n-4">
              After installing with default configuration, there should be a
              file named index.js. Code the following:
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Posts;
