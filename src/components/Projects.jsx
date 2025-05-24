import React from "react";
import todoImg from "../assets/to-do-list.jpg";
import googleSearchImg from "../assets/google-search-page.jpg";
import loginImg from "../assets/login.jpg"
const Projects = () => {
  const config={
    projects:[
      {
        img:todoImg,
        description:"This to-do list single page website build with ReactJS local storage.",
        link:"https://todo-app1hp.netlify.app/"
      },
      {
        img:googleSearchImg,
        description:"Google search clone single page website build with HTML,CSS and javascript.",
        link:"https://github.com/Vignesh1hp/Google_search_page_clone.git"
      },
      {
        img:loginImg,
        description:"Login and Register single page website build with ReactJS",
        link:"https://github.com/Vignesh1hp/Authentication-and-Authorization.git"
      }
    ]
  }
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
          {config.projects.map((project,index)=>{
            return(
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div key={index} className="relative">
                <img
                  className="h-[200px] w-[400px]"
                  src={project.img}
                  alt="todo list project profile"
                />
                <div className="project-desc">
                  <p className="text-center px-5 py-5">{project.description}</p>
                  <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>View Project</a>
                </div>
                </div>
                
              </div>
              </a>
            )
          })}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
