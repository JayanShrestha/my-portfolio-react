import Section from "../components/Section";
import useText from "../hooks/useText";

const GetInTouch = () => {
  const { animateOnLoad } = useText();
  return (
    <Section>
      <div
        className={`container transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div>
          <h1 className="h1">
            <span>Get In Touch</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};
export default GetInTouch;
