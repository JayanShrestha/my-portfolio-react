import jsLogo from "../assets/JS.png";
import ThemeToggle from "../components/ThemeToggle";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setNavigation(false);
      enablePageScroll();
    } else {
      setNavigation(true);
      disablePageScroll();
    }
  };
  const handleclick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setNavigation(false);
  };

  return (
    <div
      className={`flex fixed top-0 left-0 z-50  border-b light:border-slate-200 dark:border-n-6 lg:backdrop-blur-sm $ w-full justify-evenly`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img
            className="dark:invert w-20 h-20"
            src={jsLogo}
            alt="Jayan Shrestha"
          ></img>
        </a>
      </div>

      <nav
        className={`${openNavigation ? "flex mt-10" : "hidden "} fixed top-[5rem] left-0 right-0 bottom-0 dark:bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
      >
        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
          <a
            href="/"
            className={`block relative font-code text-2xl uppercase hover:text-color-1 transition-colors px-6 py-6 md:py-8 lg:-mr-0.5 lg:text-xs lg:font-semibold `}
          >
            Home
          </a>
          {navigation.map((item) => (
            <a
              onClick={handleclick}
              key={item.id}
              href={item.url}
              className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1 ${item.OnlyMobile ? "lg:hidden" : ""}px-6 py-6 md:py-8 lg:-mr-0.5 lg:text-xs lg:font-semibold ${
                item.url === pathname.hash
                  ? "z-2 lg:bg-color-1 lg:hover:text-color-2 "
                  : "lg:text-slate-900 dark:lg:text-n-1/50 hover:text-color-1 dark:hover:text-color-1"
              } lg:leading-5  xl:px-12`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
      <ThemeToggle className="m-auto px-1 lg:px-7" />

      <div className="flex items-center justify-end mr-4 lg:hidden">
        <Button onClick={toggleNavigation} className="px-1">
          {openNavigation ? (
            <XMarkIcon className="h-10 w-10" />
          ) : (
            <Bars3Icon className="h-10 w-10" />
          )}
        </Button>
      </div>
    </div>
  );
};
export default Header;
