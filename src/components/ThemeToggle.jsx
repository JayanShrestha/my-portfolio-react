import { useTheme } from "../hooks/useTheme";
import Button from "../components/Button";
import ButtonGradient from "../assets/assets/svg/ButtonGradient";

const ThemeToggle = (props) => {
  //Toggle for changing themes
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        className={`light:text-slate-900 text-n-1 font-sans ${props.className}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? `☀️ Light Mode` : "🌙 Dark Mode"}
      </Button>
      <ButtonGradient />
    </>
  );
};
export default ThemeToggle;
