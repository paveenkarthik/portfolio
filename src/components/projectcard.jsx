import React from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { deleteProject ,editproject } from "../services/api";
import { IoTrashBinSharp } from "react-icons/io5";
// import { useState } from "react";
//   {
//   "title": "title 1",
//   "coverimg": "Gharial",
//   "desc": "desc 1",
//     "link": "link 1",
//     "id": "1"
//   }
const projectcard = ({ title, desc, cover, id, link, key, fetchprojects }) => {
  const [titleState, setTitleState] = useState(title);
  const [descState, setDescState] = useState(desc);
  const [coverState, setCoverState] = useState(cover);
  const [linkState, setLinkState] = useState(link);
  const [visibleState, setVisibleState] = useState(false);

  const handleEdit = async (e) => {
    e.preventDefault();
    const projectdata = {
      title: titleState,
      desc: descState,
      coverimg: coverState,
      link: linkState,
    };

    try {
      const response = await editproject(id, projectdata);
      console.log(response.status);
      if (response.status === 200) {
        console.log("Updated");
      }
      fetchprojects();
    } catch (error) {
      console.log("error");
    }
    setVisibleState(false);
  };

const handledelete=async(id)=>{
  try {
    const response = await deleteProject(id);
    console.log(response.status);
    if (response.status === 200) {
      console.log("Deleted");
      fetchprojects()
    }
    fetchprojects();
  } catch (error) {
    window.alert(error);
    console.log("error");
  }
}

  const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the expanded state
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
      <div className="flex  items-center gap-3 p-4 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-500 to-slate-800 border-black border-2 rounded-xl shadow-2xl">
        <div
          className={`service-card w-[400px] bg-slate-800 shadow-xl cursor-pointer snap-start shrink-0 flex flex-col items-start rounded-xl text-yellow-50 transition-all duration-300 ${
            isExpanded ? "h-auto" : "h-[400px]"
          }`}
        >
          <img
            src={cover}
            alt="karthik"
            className="h-[150px] w-[100%] rounded-t-xl object-cover"
          />
          <p className="mt-2 mx-3 text-lg font-semibold">Project Title:</p>
          <div className=" w-[100%] flex justify-center items-center font-bold flex-wrap">
            <p>{title}</p>
          </div>
          <div
            className={`p-2 font-serif text-wrap  text-sm text-justify w-[100%] ${
              isExpanded ? "h-auto" : "h-[100px]"
            } overflow-hidden`}
          >
            {desc}
          </div>

          <div className=" w-[100%] flex justify-end items-center gap-2 mt-auto">
            <button
              onClick={toggleExpansion}
              className="text-white mx-4 "
            >
              {isExpanded ? "Read Less..." : "Read More.."}
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="text-rounded-xl m-2 text-4xl" />
            </a>
            <FiEdit2 className="text-rounded-xl m-2 text-4xl" onClick={()=>setVisibleState(true)} />
            <IoTrashBinSharp  className="text-rounded-xl m-2 text-4xl " onClick={()=>{handledelete(id)}}/>
           <p style={{ WebkitTextStroke: '1px gray', WebkitTextFillColor: 'transparent' }} className="text-5xl font-bold self-end  px-4 w-[25%]">
                        {key}
                    </p>
          </div>
        </div>
      </div>
 {
     
     visibleState && (
        <div className="h-screen w-screen flex justify-center items-center top-0 left-0 z-50 absolute" >
         <div className="flex justify-center items-center w-[300px] h-[300px] bg-yellow-400 border-yellow-600 border-2  text-black top-0 left-0">
          <form className=" flex flex-col justify-center items-center gap-4" onSubmit={handleEdit}>
            <input
              type="text"
              value={titleState }
              onChange={(e) => setTitleState(e.target.value)}
              placeholder="Enter new title"
          
              />
            <input
              type="text"
              value={descState }
              onChange={(e) => setDescState(e.target.value)}
              placeholder="Enter new description"
              required
              />
            <input
              type="text"
              value={coverState }
              onChange={(e) => setCoverState(e.target.value)}
              placeholder="Enter new cover image url"
              required
              />
            <input
              type="text"
              value={linkState}
              onChange={(e) => setLinkState(e.target.value)}
                placeholder="Enter new link"
                
                />
            <button type="submit">Update</button>
            <button onClick={()=>setVisibleState(false)}>Cancel</button>
            
          </form>   
          </div>
          </div>
)}
</>
  )
};

export default projectcard;
