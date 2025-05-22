import React from "react";
import todoImg from "../assets/to-do-list.jpg";
import googleSearchImg from "../assets/google-search-page.jpg";
import loginImg from "../assets/login.jpg"
const Projects = () => {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="projects">
      <div className="w-full px-10 py-5">
        <div className="flex flex-col ">
          <h1 className="text-4xl border-b-4 border-b-[#2b2d77] mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>These are some of my best projects.I have build these with React,MERN and vanilla css.Check them out.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img
              className="h-[200px] w-[400px]"
              src={todoImg}
              alt="todo list project profile"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">This to-do list single page website build with ReactJS</p>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[200px] w-[400px]"
              src={googleSearchImg}
              alt="google search clone project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                Google search clone single page website build with HTML,CSS and
                javascript.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[200px] w-[400px]"
              src={loginImg}
              alt="Login and Register project"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">Login and Register single page website build with ReactJS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
