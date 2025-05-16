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
            <li href="#">HOME</li>
            <li href="#">PROJECT</li>
            <li href="#">RESUME</li>
            <li href="#">CONTACT</li>
          </ul>
        </nav>
      )}
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li href="#">HOME</li>
          <li href="#">PROJECT</li>
          <li href="#">RESUME</li>
          <li href="#">CONTACT</li>
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
