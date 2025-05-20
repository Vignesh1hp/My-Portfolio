import React from "react";
import todoImg from "../assets/to-do-list.jpg";
import googleSearchImg from "../assets/google-search-page.jpg";
const Projects = () => {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-1/2">
        <div className="flex justify-center">
          <h1 className="text-4xl border-b-4 border-b-[#2b2d77] mb-5 w-[140px] font-bold">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex px-10 gap-5">
          <div>
            <img
              className="h-[200px]"
              src={todoImg}
              alt="todo list project profile"
            />
            <p>This to-do list single page website build with ReactJS</p>
          </div>
          <div>
            <img
              className="h-[200px]"
              src={googleSearchImg}
              alt="google search clone project"
            />
          </div>
          <div>
            <img
              className="h-[200px]"
              src={googleSearchImg}
              alt="google search clone project"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
