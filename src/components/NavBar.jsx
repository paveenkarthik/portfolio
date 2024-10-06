import { Book, User2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const handlecheck= () => {
  const [combovisible,setcombovisible] = useState(false);
  if(email.current.value===auctualEmail && pass.current.password===password){
    setcombovisible(true);
  }
  else{
    alert("Invalid credentials");
  }
};

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const email = useRef(null);
  const pass = useRef(null);
  const auctualEmail="paveensenthil15@gmail.com";
  const password="12345";
  return (
    <>
      <div className="h-[4rem] w-screen flex justify-center items-center bg-gradient-to-r from-slate-800 to-slate-600 flex-wrap ">
        <div className=" h-full w-[100%] flex flex-row justify-center items-center flex-wrap ">
          <div className="w-1/2 flex justify-start items-center font-bold text-xl text-gray-300 flex-wrap ">
            <p className="hover:text-green-500  hover:rounded-lg ">
              {" "}
              PAVEEN KARTHIK S
            </p>
          </div>
          <div className="w-1 flex h-full items-center justify-end flex-wrap">
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
              <div
                className=" flex justify-end items-center text-blue-50 hover:text-green-500"
                onClick={() => setVisible(true)}
              >
                <User2 className=" h-10 w-10 flex bg-slate-600 p-2 rounded-lg" />
                <p> &#8592;login</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {visible && (
        <div className=" absolute flex justify-center items-center h-screen w-screen ">
          <div className="  flex justify-center  top-0  h-[50%] w-[30%] border-2 border-black bg-gray-500  z-50 rounded-lg">
            <div className="p-6 w-full h-full flex flex-col justify-center items-center">
              <p className="text-black mb-6 text-2xl">Login Form</p>
              <form>
                <input
                  type="email"
                  placeholder=" EMAIL ID"
                  className="w-full p-2 mt-4 rounded-lg"
                  ref={email}
                  required
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  className="w-full p-2 mt-4 rounded-lg"
                  ref={pass}
                  required
                />
                <button className="w-full p-2 mt-4 rounded-lg bg-green-500 text-white border-2 border-black " onClick={handlecheck}>
                  Login
                </button>
                <button
                  className="w-full p-2 mt-4 rounded-lg bg-red-600 text-white border-2 border-black"
                  onClick={() => setVisible(!visible)}
                >
                  cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
export {handlecheck};

