import React from "react";
import { FaLinkedin, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
const contact = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-wrap">
        <div className="h-[70%] w-[70%] flex justify-start items-start bg-black flex-wrap">
          <div className="w-full h-[6rem] bg-yellow-500 flex justify-center items-center flex-wrap">
            <h1 className="font-serif text-2xl font-bold">PAVEEN KARTHIK S</h1>
          </div>
          <div className="w-[50%] h-[8rem] bg-green-600 flex justify-center items-center flex-wrap  hover:text-black hover:bg-green-400 hover:cursor-pointer">
            <a href="www.linkedin.com/in/paveenkarthik-s" target="_blank">  <FaLinkedin className="text-4xl" /></a>
          
          </div>
          <div className="w-[50%] h-[8rem] bg-zinc-700 flex justify-center items-center flex-wrap  hover:bg-zinc-800 hover:text-green-600 hover:cursor-pointer">
            <a href="tell:7868870863">  <FaPhoneSquareAlt className="text-4xl"  /></a>
          
          </div>
          <div className="w-[50%] h-[8rem] bg-zinc-700 flex justify-center items-center flex-wrap  hover:bg-zinc-800 hover:text-green-600 hover:cursor-pointer">
            <a href="mailto:paveensenthil15@gmail.com"><IoMailSharp className="text-4xl" /></a>
            
          </div>
          <div className="w-[50%] h-[8rem] bg-green-600 flex justify-center items-center flex-wrap  hover:text-black hover:bg-green-400 hover:cursor-pointer">
            <FaGithub className="text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
