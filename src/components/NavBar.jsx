import { User2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="h-[4rem] w-screen flex justify-center items-center bg-slate-800">
        <div className=" h-full w-[100%] flex flex-row justify-center items-center ">
        <div className="w-1/2 flex justify-start items-center font-bold text-xl text-white ">
          <p className="hover:text-green-500 hover:bg-white hover:rounded-lg hover:p-2 "> PAVEEN KARTHIK S</p>
          </div>
          <div className="w-1 flex h-full items-center justify-end">
            <ul className="h-full items-center w-1/2 flex justify-center gap-6 ">
              <li className="bg-slate-200 p-2 rounded-lg hover:bg-green-600">
                <Link to="/">HOME</Link>
              </li>
              <li className="bg-slate-200 p-2 rounded-lg hover:bg-green-600">
                <Link to="/projects">PROJECTS</Link>
              </li>
              <li className="bg-slate-200 p-2 rounded-lg hover:bg-green-600">
                <Link to="/contact">Contacts</Link>
              </li>
              <div className=" flex justify-end items-center text-blue-50 hover:text-green-500">
              <User2 className=" h-10 w-10 flex bg-slate-600 p-2 rounded-lg" />
              <p> &#8592;login</p>
              </div>
            </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
