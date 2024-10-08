import React from "react";
// import NavBar from "../components/NavBar";
// import { useState } from "react";
// // import { useState } from "react";

// import { FaGithub } from "react-icons/fa6";

// const userData = [
//   {
//     img: "https://pickyourtrail.com/blog/wp-content/uploads/2020/09/ajay-parthasarathy-I27kjbkwlAo-unsplash.jpg",
//     title: "CRICKET TICKET BOOKING AND GROUND MANAGEMENT",
//     discription:
//       " The project features a console-based platform enabling administrators to perform CRUD operations, including match scheduling, ground management, and ticketing systems. It provides users with a seamless ticketing experience for booking and cancelling tickets. The design is structured using object-oriented programming principles such as encapsulation and inheritance, ensuring a well-organized and maintainable codebase. Developed in Java for robust application logic and MySQL for efficient database management, the project combines reliability and efficiency.",
//     gitLink: "https://github.com/",
//   },
//   {
//     img: "https://exeter.anglican.org/wp-content/uploads/2019/10/employment-2.jpg",
//     title: "EMPLOYMENT MANAGEMENT SYSTEM",
//     discription:
//       "An employment portal designed to help users find suitable job opportunities based on their skills, location, and experience. It includes a job search functionality, job listings, and a user profile to track their progress and application status. Developed in React.js, it uses a GraphQL API for fetching job data and integrates with a PostgreSQL database for user authentication and data storage.",
//     gitLink: "https://github.com/",
//   },
//   {
//     img: "https://pickyourtrail.com/blog/wp-content/uploads/2020/09/ajay-parthasarathy-I27kjbkwlAo-unsplash.jpg",
//     title: "SPARKYFY (FRONT-END)",
//     discription:
//       "Sparkyfy is a social media platform designed to help users connect with others who share similar interests and hobbies. It provides a platform for users to create profiles, post updates, and share content related to their interests. Users can follow other users, like and comment on posts, and interact with the platform through various features such as chat, messaging, and notifications. Developed in React.js and Redux, it uses a GraphQL API for fetching user data and integ",
//     gitLink: "https://github.com/",
//   },
// ];


// function User(props) {
//   // State to manage whether the description is expanded or not
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Function to toggle the expanded state
//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="items-center gap-3 p-4 bg-yellow-500 rounded-xl shadow-2xl">
//       <div
//         className={`service-card w-[400px] bg-black shadow-xl cursor-pointer snap-start shrink-0 flex flex-col items-start rounded-xl text-yellow-50 transition-all duration-300 ${
//           isExpanded ? "h-auto" : "h-[400px]"
//         }`}
//       >
//         <img
//           src={props.img}
//           alt="karthik"
//           className="h-[150px] w-[100%] rounded-t-xl object-cover"
//         />
//         <p className="mt-2 mx-3 text-lg font-semibold">Project Title:</p>
//         <div className=" w-[100%] flex justify-center items-center font-bold flex-wrap">
//           <p>{props.title}</p>
//         </div>
//         <div
//           className={`p-2 font-serif text-wrap  text-sm text-justify ${
//             isExpanded ? "h-auto" : "h-[100px]"
//           } overflow-hidden`}
//         >
//           {props.discription}
//         </div>
//         <div className=" w-[100%] flex justify-end items-center gap-2 mt-auto">
//           <button
//             onClick={toggleExpansion}
//             className="text-white text-blue-400 mx-4 "
//           >
//             {isExpanded ? "Read Less..." : "Read More.."}
//           </button>
//         </div>
//         <div className="flex justify-center items-center gap-2 mt-auto">
//           <a
//             href={props.gitLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2"
//           >
//             <FaGithub className="text-rounded-xl m-2 text-4xl" />
//           </a>

//         </div>
//       </div>
//     </div>

//   );
// }

// const Projects = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center h-screen w-screen bg-yellow-300 flex-wrap gap-5">
//         {userData.map((data, index) => (
//           <User
//             key={index}
//             img={data.img}
//             title={data.title}
//             discription={data.discription}
//             gitLink={data.gitLink}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
//  export default Projects;


// import { useEffect, useState } from "react"
// import { getProjects } from "../services/api"
// import AddComponent from "../components/AddComponenet"
// // import { toast, Toaster } from "sonner"
// import ProjectCard from "../components/projectcard"
// import { MessageCircleWarning } from "lucide-react"

// const Projects = () => {
//   const [projectdata, setProjectdata] = useState([])
//   // Projects.defaultProps = {
//   //   projectdata: [],
//   // };
//   const fetchprojects = async () => {
//     // const {}
//     try {
//       const { data } = await getProjects()
//       console.log(data)
//       setProjectdata(data)
//     } catch (error) {
//       console.log(error);
//       // toast('Error', {
//       //   className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
//       //   icon: <MessageCircleWarning />,
//       // });
//     }
//   }

//   // const localdata = localStorage.getItem("userEmail")
//   // console.log(localdata)

//   useEffect(() => {
//     fetchprojects()
//   }, [])
//   if (!projectdata || projectdata.length === 0) {
//     return (
//       <div className="w-full h-[10%] flex justify-center items-center">
//         <AddComponent />
//       </div>
//     )
//   }
//   return (

//     <>
//       <div className="flex justify-center items-center  w-screen bg-yellow-300 flex-wrap gap-5 text-white">
//         <div className="w-[100%] flex justify-end mx-5 my-4">
//         <AddComponent fetchprojects={fetchprojects} className="w-[100%]"/>

//         </div>
//         {projectdata.map((project) => (
//           <ProjectCard title={project.title} desc={project.desc} id={project.id} cover={project.coverimg} link={project.link} fetchprojects={fetchprojects} />
//         ))}
//       </div>
//     </>
//   )
// }


// export default Projects



import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import AddComponent from "../components/AddComponenet";
import ProjectCard from "../components/projectcard";
import {handlecheck} from "../components/NavBar"

const Projects = () => {
  const [projectdata, setProjectdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [combovisible,setcombovisible] = useState(true);
  const fetchprojects = async () => {
    try {
      const { data } = await getProjects();
      if (Array.isArray(data)) {
        setProjectdata(data); // Set project data only if it's an array
      } else {
        console.log("Data fetched is not an array:", data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Stop loading after fetch completes
    }
  };

  useEffect(() => {
    fetchprojects();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full h-[10%] flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
  // Empty state
  if (!projectdata || projectdata.length === 0) {
    return (
      <>
      
      <div className="w-full flex justify-center items-center">
        <AddComponent />
      </div>
     
      </>
    );
  }
  
  {handlecheck}
  if(combovisible) {

    return (
      <>
   
      <div className="flex justify-center items-center w-screen h-screen flex-wrap  bg-gray-500 ">
        <div className="w-[100%] flex justify-end mx-5 ">
          <AddComponent fetchprojects={fetchprojects} className="w-[100%]" />
        </div>
      <div className="flex justify-center items-center w-screen flex-wrap gap-2 text-white">
        {projectdata.map((project,index) => (
          <ProjectCard
          key={index} // Make sure to add a key here
          title={project.title}
          desc={project.desc}
          id={project._id}
          cover={project.coverimg}
          link={project.link}
          fetchprojects={fetchprojects}
          />
        ))}
      </div>
      </div>
    </>
  );
}
}

export default Projects;
