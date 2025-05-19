import React from "react";
import MyPicture from "../assets/myself.png";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-montserrat">
          Hi,
          <br />
          I'm Vignesh Kumar
          <p className="text-2xl">I'm a Front-end developer</p>
        </h1>
        <div className="flex py-10">
          <a className="pr-5 hover:text-white" href="#">
            <AiOutlineGithub size={40} />
          </a>
          <a className="pr-5 hover:text-white" href="#">
            <AiOutlineLinkedin size={40} />
          </a>
          <a className="hover:text-white" href="#">
            <AiOutlineInstagram size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={MyPicture} alt="Profile Picture" />
    </section>
  );
};

export default Hero;
