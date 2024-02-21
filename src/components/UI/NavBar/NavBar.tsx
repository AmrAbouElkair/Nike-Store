import { useState, useEffect } from "react";

import { headerLogo } from "../../../assets/images/index";
import { hamburger } from "../../../assets/icons/index";
import { navLinks } from "../../../constants";

const NavBar = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    return storedTheme ? storedTheme === "true" : false;
  });

  useEffect(() => {
    if (toggleDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDarkMode", String(toggleDarkMode));
  }, [toggleDarkMode]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="font-montserrat leading-normal text-lg text-slate-gray dark:text-orange-600 dark:font-medium"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
        <button
          type="button"
          id="toggleDark"
          onClick={() => setToggleDarkMode((prevState) => !prevState)}
        >
          <i
            className={`fa-solid fa-xl ${
              !toggleDarkMode
                ? "fa-moon text-blue-950"
                : "fa-sun text-coral-red"
            }`}
          ></i>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
