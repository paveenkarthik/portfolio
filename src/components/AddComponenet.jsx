import React from "react";
import { useState, useRef } from "react";
import { addProject } from "../services/api";
import { MdOutlineNoteAdd } from "react-icons/md";
import { MdCancel } from "react-icons/md";

//   {
//   "title": "title 1",
//   "coverimg": "Gharial",
//   "desc": "desc 1",
//     "link": "link 1",
//     "id": "1"
//   }
const AddComponenet = ({ fetchprojects }) => {
  const titleref = useRef(null);
  const coverimgref = useRef(null);
  const descref = useRef(null);
  const linkref = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    const prjectdata = {
      title: titleref.current.value,
      coverimg: coverimgref.current.value,
      desc: descref.current.value,
      link: linkref.current.value,
    };
    try {
      const response = await addProject(prjectdata);
      console.log(response.status);
      if (response.status === 201) {
        console.log("added");
        fetchprojects();
      }
    } catch (error) {
      console.log("handleAdd failed");
    }
    setVisibleState(false);
  };



  
  const [visibleState, setVisibleState] = useState(null);
  return (
    <>
      <button
        onClick={() => 
           setVisibleState(true)
        }
        className="flex justify-center items-center text-white bg-purple-500 p-1 rounded-sm"
      >
        <MdOutlineNoteAdd className="text-rounded-xl m-2 text-4xl" />
      </button>

      {visibleState && (
        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
          <div className="w-[40%] border-2 border-solid  ">
          <form onSubmit={handleAdd}>
            <div className=" bg-black text-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Add New Project</h1>
                {/* <button
                  onClick={() => setVisibleState(false)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  X
                </button> */}
                <MdCancel onClick={() => setVisibleState(false)}
                  className="text-4xl text-red-500 hover:text-red-700"/>
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="appearance-none border
                              rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                  id="title"
                  type="text"
                  placeholder="Enter Title"
                  ref={titleref}
                  required
                />
              </div>
              <div className="mt-4">
                <label

                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="coverimg"
                >
                  Cover Image URL
                </label>
                <input
                  className="appearance-none border
                              rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                  id="coverimg"
                  type="text"
                  placeholder="Enter Cover Image URL"
                  ref={coverimgref}
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="desc"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                  id="desc"
                  rows="4"
                  placeholder="Enter Description"
                  ref={descref}
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="link"
                >
                  Link
                </label>
                <input
                  className="appearance-none border
                              rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                  id="link"
                  type="text"
                  placeholder="Enter Link"
                  ref={linkref}
                  required
                />
              </div>
              <div className="flex items-center justify-end mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-700"
                >
                  Add Project
                </button>
                <button
                  onClick={() => setVisibleState(false)}
                  className="ml-4 px-4 py-2 text-gray-300 border border-gray-300 rounded-lg hover:bg-red-600 hover:text-black"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddComponenet;
