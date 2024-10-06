import React from "react";
import { FaLinkedin, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
const contact = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-wrap bg-gray-500 ">
        <div className="w-[60%] flex justify-start items-start flex-wrap rounded-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-500 to-slate-800 border-2 border-black ">
          <div className="w-full h-[6rem] flex justify-center items-center flex-wrap rounded-lg  ">
            <h1 className="font-serif text-5xl font-bold text-black  hover:text-white">
              PAVEEN KARTHIK S
            </h1>
          </div>
          <a
            href="www.linkedin.com/in/paveenkarthik-s"
            target="_blank"
            className=" m-1 w-[49%] h-[8rem] bg-slate-800  text-gray-300  hover:text-white hover:cursor-pointer flex justify-center items-center flex-wrap rounded-lg  hover:bg-zinc-800"
          >
            {" "}
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="tell:7868870863"
            className=" m-1 w-[49%] h-[8rem] bg-slate-800  text-gray-300  hover:text-white hover:cursor-pointer flex justify-center items-center flex-wrap rounded-lg  hover:bg-zinc-800"
          >
            <FaPhoneSquareAlt className="text-4xl" />
          </a>
          <a
            href="mailto:paveensenthil15@gmail.com"
            className=" m-1 w-[49%] h-[8rem] bg-slate-800   text-gray-300  flex justify-center items-center flex-wrap rounded-lg hover:bg-zinc-800 hover:text-white hover:cursor-pointer"
          >
            <IoMailSharp className="text-4xl" />
          </a>
          <div className="  m-1 w-[49%] h-[8rem] bg-slate-800  text-gray-300  flex justify-center items-center flex-wrap rounded-lg hover:bg-zinc-800 hover:text-white hover:cursor-pointer">
            <FaGithub className="text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
