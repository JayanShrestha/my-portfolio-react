import {
  Mail,
  Send,
  MapMinusIcon,
  CalendarCheck,
  Github,
  Linkedin,
  Projector,
  CloudLightning,
  CircleCheck,
} from "lucide-react";
import Section from "../components/Section";
import useText from "../hooks/useText";
import Button from "./Button";
import { useState } from "react";
import { ContactApi } from "../api/ContactApi";

const GetInTouch = () => {
  const { animateOnLoad } = useText();
  const [body, setBody] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setBody((prevalue) => {
      return {
        ...prevalue, //previous held values for all parts of body such as name, email, subject and message
        [name]: value, //same name of the object to change values
      };
    });
  }
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBody(() => {
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    });
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
    ContactApi(body);
  };
  return (
    <Section
      className="pt-48"
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="contact"
    >
      <div
        className={`container mt-24 transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-48`}
      >
        <div className="flex flex-wrap items-center justify-center">
          <h1 className="h1">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-color-6 via-color-5 to-color-1">
              Get In Touch
            </span>
          </h1>
          <p className="p-2 md:px-64 body-1 text-center text-n-8/50 dark:text-n-1/50">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-flow-col md:grid-cols-[70%,30%] mt-16 gap-8">
          <form onSubmit={handleSubmit}>
            <div className="container grid dark:bg-n-7 bg-slate-100 border-none rounded-2xl p-8  dark:text-slate-200 ">
              <h2 className="h5 font-bold">Send a Message</h2>
              <div className="Input mt-5">
                <div className="name grid md:grid-cols-2 gap-8">
                  <div className="flex flex-wrap flex-col">
                    <label>Name</label>
                    <input
                      required
                      className="mt-2 border-border p-2 rounded-2xl focus:outline-none focus:border-transparent transition-all focus:ring-2 ring-color-1 dark:bg-n-8"
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={body.name}
                    />
                  </div>
                  <div className="flex flex-wrap flex-col">
                    <label>Email</label>
                    <input
                      required
                      className="mt-2 border-border p-2 rounded-2xl focus:outline-none focus:border-transparent transition-all focus:ring-2 ring-color-1 dark:bg-n-8 "
                      name="email"
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      onChange={handleChange}
                      value={body.email}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap flex-col mt-5">
                  <label>Subject</label>
                  <input
                    required
                    className="mt-2 border-border p-2 rounded-2xl focus:outline-none focus:border-transparent transition-all focus:ring-2 ring-color-1 dark:bg-n-8"
                    name="subject"
                    id="subject"
                    placeholder="What's this about?"
                    onChange={handleChange}
                    value={body.subject}
                  />
                </div>
                <div className="flex flex-wrap flex-col mt-5">
                  <label>Message</label>
                  <textarea
                    required
                    rows="6"
                    className="mt-2 border-border p-2 rounded-2xl focus:outline-none focus:border-transparent transition-all focus:ring-2 ring-color-1 dark:bg-n-8"
                    name="message"
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    onChange={handleChange}
                    value={body.message}
                  ></textarea>
                </div>
                <Button
                  className={`mt-5 ${
                    status === "success"
                      ? `bg-color-1 border-none rounded-2xl text-slate-200`
                      : ``
                  }`}
                  type="submit"
                >
                  <div className="flex flex-wrap p-2 ">
                    <div
                      className={
                        status === "loading"
                          ? `hidden`
                          : `${status === "success" ? `hidden` : ``}`
                      }
                    >
                      <Send />
                    </div>
                    <div className={status === "success" ? `block` : `hidden`}>
                      <CircleCheck />
                    </div>

                    <span className="pl-2">
                      {status === null ? "Send Message" : ""}
                      {status === "loading" ? (
                        <div>
                          <div class="h-6 w-6 animate-spin rounded-full border-4 border-color-1 border-t-transparent"></div>
                          <p>Sending</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {status === "success" ? <p>Success</p> : ""}
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </form>

          <div className="flex flex-col">
            <div className="contactInfo container grid grid-flow-row dark:bg-n-7 bg-slate-100 border-none rounded-2xl p-8  dark:text-slate-200 h-fit">
              <h2 className="h5 font-bold">Contact Information</h2>
              <div className="mt-5">
                <div className="flex flex-col item-center justify-center ">
                  <div className="flex p-2">
                    <span>
                      <Mail />
                    </span>
                    <div className="flex flex-col pl-2">
                      <span className="text-n-5 dark:text-n-3 text-sm">
                        Email
                      </span>
                      <span>jayanshrestha055@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col item-center justify-center ">
                  <div className="flex p-2">
                    <span>
                      <MapMinusIcon />
                    </span>
                    <div className="flex flex-col pl-2">
                      <span className="text-n-5 dark:text-n-3 text-sm">
                        Location
                      </span>
                      <span>Sydney, NSW</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col item-center justify-center">
                  <div className="flex p-2">
                    <span>
                      <CalendarCheck />
                    </span>
                    <div className="flex flex-col pl-2">
                      <span className="text-n-5 dark:text-n-3 text-sm">
                        Avaibility
                      </span>
                      <span>Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactInfo container grid grid-flow-row dark:bg-n-7 bg-slate-100 border-none rounded-2xl p-8  dark:text-slate-200 h-fit mt-8">
              <h2 className="h5 font-bold">Connect With Me</h2>
              <div className="mt-5">
                <div
                  className={`flex flex-col justify-between  max-w-lg transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} `}
                >
                  <Button
                    href="https://github.com/JayanShrestha"
                    target="_blank"
                  >
                    <div className="flex flex-wrap justify-center items-center">
                      <Github />
                      <p className="pl-2">Github</p>
                    </div>
                  </Button>

                  <Button
                    href="https://www.linkedin.com/in/jayan-shrestha/"
                    target="_blank"
                  >
                    <div className="flex flex-wrap justify-center items-center">
                      <Linkedin />
                      <p className="pl-2">LinkedIn</p>
                    </div>
                  </Button>
                  <Button href="mailto:jayanshrestha055@gmail.com">
                    <div className="flex flex-wrap justify-center items-center">
                      <Mail />
                      <p className="pl-2">Email</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[20%,80%] items-start justify-center mt-8 bg-slate-100 dark:bg-n-5 p-5 border-none rounded-2xl">
              <span className="pt-2 pl-5">
                <CloudLightning />
              </span>

              <div className="flex flex-col items-start justify-center">
                <h2 className="h6 font-bold">Quick Response</h2>
                <span className="text-n-4">
                  I typically respond within 24 hours. Looking forward to
                  connecting with you!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default GetInTouch;
