import React from "react";
import ResumeImg from "../assets/resume.jpg";
const Resume = () => {
  return (
    <section className="flex flex-col bg-secondary px-5 md:flex-row">
      <div className="py-5 md:w-1/2 flex justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="About Image" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-b-[#5551E3] mb-5 w-[140px] font-bold">Resume</h1>
          <p className="pb-5">You can view my resume <a className="btn" href="#">Download</a></p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
