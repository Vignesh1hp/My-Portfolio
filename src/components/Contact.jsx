import React from "react";
const Contact = () => {
  const config={
    email:'vigneshkumarb.sc2004@gmail.com',
    phone:'7010722215'
  }
  return (
    <section className="flex flex-col bg-primary px-5 py-32 text-white" id="contact"> 
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4 border-b-[#2d2b77] mb-5 w-[135px] font-bold">Contact</h1>
        <p className="pb-5">If you want to discuss more in detail,please contact me</p>
        <p className="py-2"><span className="font-bold">Email : </span>{config.email}</p>
        <p className="py-2"><span className="font-bold">Phone : </span>{config.phone}</p>
      </div>
    </section>
  );
};

export default Contact;
