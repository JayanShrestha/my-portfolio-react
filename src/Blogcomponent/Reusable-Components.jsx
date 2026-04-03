const Reusable_Components = () => {
  return (
    <>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          1. Creating Reusable Component
        </h3>
        <p className="mb-4 body-1 text-n-4">
          For simple and beginner friendly manner, I created a button component.
          This component accepts props value and render the button type
          according to the props value when used.
        </p>
        <p class="mt-6 body-1 text-n-4">Here is an example:</p>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {"const Button = (props) =>{"} <br></br>
            {"const renderButton = () =>("}
            <br></br>
            {"<button onClick={props.onClick}>"}
            <br></br>
            {"<span>{props.children}</span>"}
            <br></br>
            {"</button>"}
            <br></br>
            {");"}
            <br></br>
            {"const renderLink = () => ("}
            <br></br>
            {"  <a"}
            <br></br>
            {" href={props.href}"}
            <br></br>
            {"className={`mt-5 hover:scale-105  ${classes}`}"}
            <br></br>
            {"  target={props.target}"}
            <br></br>
            {" >"}
            <br></br>
            {"  <span className={spanClasses}>{props.children}</span>"}
            <br></br>
            {"  </a>"}
            <br></br>
            {" );"}
            <br></br>
            {
              " return props.href ? renderLink() : renderButton(); //if link is present link is rendered or else button"
            }
            <br></br>
            {"};"}
            <br></br>
            {"export default Button;"}
          </code>
        </pre>
        <p class="mt-6 body-1 text-n-4">
          In the above example, the return JSX element depends upon the props
          value "href". If its passed, renderLink is passed or else renderButton
          is passed.
        </p>
      </div>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          2. Defining Dynamic Classes
        </h3>
        <p className="mb-4 body-1 text-n-4">
          Dynamic classes can be assigned to both button and the element wrapped
          between that button component. Along with classes dynamic function can
          also be added with the help of prop
        </p>
        <p class="mt-6 body-1 text-n-4">Here is an example:</p>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {
              "const classes = `button text-sm relative flex items-center justify-center h-11"
            }{" "}
            <br></br>
            {"const spanClasses = `relative z-10 p-5`;"}
            <br></br>
            {"<button className={classes} onClick={props.onClick}>"}
            <br></br>
            {"<span>{props.children}</span>"}
            <br></br>
            {"</button>"}
            <br></br>
            {");"}
            <br></br>
          </code>
        </pre>
        <p class="mt-6 body-1 text-n-4">
          {
            "In the above example, the const classes is defined which are passed to button via curly braces {}. Similarly, onClick function is passed from props to onClick property of button element. "
          }
          .
        </p>
      </div>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          3. Using Button Component dynamically
        </h3>
        <p className="mb-4 body-1 text-n-4">
          This button component can be imported and reused multiple times
          without rewriting the same code and rendering dynamically multiple
          time in different components.
        </p>
        <p class="mt-6 body-1 text-n-4">Here is an example:</p>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {"  <Button"}
            <br></br>
            {`  href="https://www.linkedin.com/in/jayan-shrestha/"`}
            <br></br>
            {` target="_blank"`}
            <br></br>
            {">"}
            <br></br>
            {`<div className="flex flex-wrap justify-center items-center">`}
            <br></br>
            {` <p className="pl-2">LinkedIn</p>`}
            <br></br>
            {` </div>`}
            <br></br>
            {`  </Button>`}
          </code>
        </pre>
        <p class="mt-6 body-1 text-n-4">
          {
            "In the above example, the button rendered is renderLink element with href attribute. The children <p> element accept classes from Button commponent and supplied classes."
          }
        </p>
      </div>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">4. Final Thoughts</h3>
        <p className="mb-4 body-1 text-n-4">
          Now, you have created the reusable button component running on React.
          This setup is simple and beginner friendly, and perfect to grasp the
          idea on how reusable component works. You can use this setup to render
          button dynamically in your next React project.
        </p>
      </div>
    </>
  );
};
export default Reusable_Components;
