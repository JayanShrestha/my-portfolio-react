import ButtonSvg from "../assets/assets/svg/ButtonSvg";

const Button = (props) => {
  const classes = `button text-sm relative items-center justify-center h-11 transition-colors dark:hover:text-color-1 text-slate-900 dark:text-n-1 ${props.px || "px-7"} ${props.white ? "text-n-1" : "text-n-8"} ${props.className || ""}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes} onClick={props.onClick}>
      <span>{props.children}</span>
      {ButtonSvg(props.white)}
    </button>
  );
  const renderLink = () => (
    <a href={props.href} className={classes}>
      <span className={spanClasses}>{props.children}</span>
      {ButtonSvg(props.white)}
    </a>
  );

  return props.href ? renderLink() : renderButton(); //if link is present link is rendered or else button
};
export default Button;
