import React from "react";
import MyPicture from "../assets/myself.png";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
const Hero = () => {
  const config = {
    subtitle: "I'm a Front-end developer",
    social:{
      github:'https://github.com/Vignesh1hp',
      linkedin:'https://www.linkedin.com/in/vigneshkumar1hp/',
      instagram:'https://www.instagram.com/vignesh_1hp?igsh=ZW5maW5kdThhZjNu'
    }
  }
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-montserrat">
          Hi,
          <br />
          I'm Vignesh Kumar
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a className="pr-5 hover:text-white" href={config.social.github} target="_blank">
            <AiOutlineGithub size={40} />
          </a>
          <a className="pr-5 hover:text-white" href={config.social.linkedin} target="_blank">
            <AiOutlineLinkedin size={40} />
          </a>
          <a className="hover:text-white" href={config.social.instagram} target="_blank">
            <AiOutlineInstagram size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={MyPicture} alt="Profile Picture" />
    </section>
  );
};

export default Hero;
