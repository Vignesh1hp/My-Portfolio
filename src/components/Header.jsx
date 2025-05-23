import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (toggleMenu) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleMenu]); // Add toggleMenu to dependencies

  return (
    <header className="flex justify-between px-5 py-2 bg-primary fixed top-0 w-full z-50">
      <a href="/" className="font-bold text-black">
        Vignesh Kumar
      </a>

      {toggleMenu && (
        <nav className="block md:hidden">
          <ul
            onClick={() => setToggleMenu(false)}
            className="flex flex-col text-white mobile-nav"
          >
            <li><a href="/">HOME</a></li>
            <li><a href="/#about">ABOUT</a></li>
            <li><a href="/#projects">PROJECTS</a></li>
            <li><a href="/#resume">RESUME</a></li>
            <li><a href="/#contact">CONTACT</a></li>
          </ul>
        </nav>
      )}

      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li><a href="/">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
};

export default Header;
