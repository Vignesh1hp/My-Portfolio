import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a href="#" className="font-bold text-black">
        LOGO
      </a>
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul className="flex flex-col text-white mobile-nav">
            <a href="#"><li href="#">HOME</li></a>
            <a href="#"><li href="#">ABOUT</li></a>
            <a href="#"><li href="#">PROJECT</li></a>
            <a href="#"><li href="#">RESUME</li></a>
            <a href="#"><li href="#">CONTACT</li></a>
          </ul>
        </nav>
      )}
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <a href="#"><li href="#">HOME</li></a>
          <a href="#"><li href="#">PROJECT</li></a>
          <a href="#"><li href="#">RESUME</li></a>
          <a href="#"><li href="#">CONTACT</li></a>
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
