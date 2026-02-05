import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // initial value for hook theme
  useEffect(() => {
    //initiates whene theme is changed
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light"); //set theme to light at root
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark"); //set theme to dark at root
    }
  }, [theme]);
  return { theme, setTheme };
}
