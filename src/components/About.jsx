import React from "react";
import AboutImg from "../assets/about.png";
const About = () => {
  return (
    <section className="flex flex-col bg-secondary px-5 md:flex-row">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} alt="About Image" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-b-[#5551E3] mb-5 w-[170px] font-bold">About Me</h1>
          <p className="pb-5">Hi,I am vignesh Kumar.I am a Full stack web developer.I build beautiful websites with React.js and tailwindcss  </p>
          <p className="pb-5">
            I am proficient in skills like React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. I have a passion for creating dynamic and responsive web applications that provide an excellent user experience. 
          </p>
          <p className="pb-5">
            I am always eager to learn new technologies and improve my skills. I enjoy working on challenging projects and collaborating with others to achieve common goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
