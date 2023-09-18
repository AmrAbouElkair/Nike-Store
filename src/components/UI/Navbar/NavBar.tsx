import { useState, useEffect } from "react";

import { headerLogo } from "../../../assets/images/index";
import { hamburger } from "../../../assets/icons/index";
import { navLinks } from "../../../constants";

const NavBar = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (!toggleDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const toggleDark = document.getElementById("toggleDark")!;
    toggleDark.addEventListener("click", handleClick);

    return () => {
      toggleDark.removeEventListener("click", handleClick);
    };
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
          className="transition-all duration-1000"
        >
          <i
            className={`fa-solid fa-xl duration-300 ease-linear ${
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
