import React from "react";
import NavBar from "../components/NavBar";
import { FaGithub } from "react-icons/fa6";

const userData=[
  {
    img:"https://pickyourtrail.com/blog/wp-content/uploads/2020/09/ajay-parthasarathy-I27kjbkwlAo-unsplash.jpg",
    title:"CRICKET TICKET BOOKING AND GROUND MANAGEMENT",
    discription:" The project features a console-based platform enabling administrators to perform CRUD operations, including match scheduling, ground management, and ticketing systems. It provides users with a seamless ticketing experience for booking and cancelling tickets. The design is structured using object-oriented programming principles such as encapsulation and inheritance, ensuring a well-organized and maintainable codebase. Developed in Java for robust application logic and MySQL for efficient database management, the project combines reliability and efficiency.",
    gitLink:"https://github.com/"
  },
  {
    img:"https://exeter.anglican.org/wp-content/uploads/2019/10/employment-2.jpg",
    title:"EMPLOYMENT MANAGEMENT SYSTEM",
    discription:"An employment portal designed to help users find suitable job opportunities based on their skills, location, and experience. It includes a job search functionality, job listings, and a user profile to track their progress and application status. Developed in React.js, it uses a GraphQL API for fetching job data and integrates with a PostgreSQL database for user authentication and data storage.",
    gitLink:"https://github.com/"
  },
  {
    img:"https://pickyourtrail.com/blog/wp-content/uploads/2020/09/ajay-parthasarathy-I27kjbkwlAo-unsplash.jpg",
    title:"SPARKYFY (FRONT-END)",
    discription:"Sparkyfy is a social media platform designed to help users connect with others who share similar interests and hobbies. It provides a platform for users to create profiles, post updates, and share content related to their interests. Users can follow other users, like and comment on posts, and interact with the platform through various features such as chat, messaging, and notifications. Developed in React.js and Redux, it uses a GraphQL API for fetching user data and integ",
    gitLink:"https://github.com/"
  }
]

function User(props){
  return (
    <div className="service-card w-[400px]   bg-black shadow-xl cursor-pointer snap-start shrink-0 flex flex-col items-start rounded-xl  text-yellow-50 ">
      <img src={props.img} alt="karthik" className=" h-[150px] w-[100%] relative rounded-xl" />
      <p>Project Title:</p>
      <div className="flex justify-center items-center font-bold flex-wrap">
        <p>{props.title}</p>
      </div>
      <div className="flex justify-center items-center text-justify ">
        {props.discription}
      </div>
      <div className="flex justify-center items-center gap-2  ">
        <a href={props.gitLink} target="_blank" rel="noopener noreferrer"/>
          <FaGithub className="text-rounded-xl my-2"/>
          </div>
        </div>
  )
}

const Projects = () => {
  return (
    <>
      {/* <div className="w-screen h-[2rem]  bg-yellow-300 flex justify-center items-center font-bold border-2 border-black">
        <p className="text-3xl">PROJECTS</p>
      </div> */}
      <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-yellow-300 flex-wrap gap-5">

        <div className="flex flex-wrap justify-center items-center gap-3 p-4 bg-yellow-500 rounded-xl shadow-2xl">
        <div className=" service-card w-[400px]   bg-black shadow-xl cursor-pointer snap-start shrink-0 flex flex-col items-start rounded-xl  text-yellow-50 ">
          <img src="https://pickyourtrail.com/blog/wp-content/uploads/2020/09/ajay-parthasarathy-I27kjbkwlAo-unsplash.jpg" alt="karthik" className=" h-[150px] w-[100%] relative rounded-xl" />
          <p>Project Title:</p>
          <div className="flex justify-center items-center font-bold flex-wrap">
            <p>CRICKET TICKET BOOKING AND GROUND MANAGEMENT</p>
          </div>
          <div className=" flex justify-center items-center text-justify ">
            The project features a console-based platform enabling
            administrators to perform CRUD operations, including match
            scheduling, ground management, and ticketing systems. It provides
            users with a seamless ticketing experience for booking and
            cancelling tickets. The design is structured using object-oriented
            programming principles such as encapsulation and inheritance,
            ensuring a well-organized and maintainable codebase. Developed in
            Java for robust application logic and MySQL for efficient database
            management, the project combines reliability and efficiency. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Totam, officiis.
          </div>
          <div className=" w-[100%] flex flex-row items-center justify-center gap-2  ">
            <FaGithub className="text-4xl rounded-xl my-2"/>
          </div>
        </div>
        </div>


        <div className="flex flex-wrap justify-center items-center gap-3 p-4 bg-yellow-500 rounded-xl shadow-2xl">
        <div className=" service-card w-[400px]   bg-black shadow-xl cursor-pointer snap-start shrink-0 flex flex-col items-start rounded-xl  text-yellow-50 ">
          <img src="https://pickyourtrail.com/blog/wp-content/uploads/2020/09/ajay-parthasarathy-I27kjbkwlAo-unsplash.jpg" alt="karthik" className=" h-[150px] w-[100%] relative rounded-xl" />
          <p>Project Title:</p>
          <div className=" flex justify-center items-center text-justify ">
            The project features a console-based platform enabling
            administrators to perform CRUD operations, including match
            scheduling, ground management, and ticketing systems. It provides
            users with a seamless ticketing experience for booking and
            cancelling tickets. The design is structured using object-oriented
            programming principles such as encapsulation and inheritance,
            ensuring a well-organized and maintainable codebase. Developed in
            Java for robust application logic and MySQL for efficient database
            management, the project combines reliability and efficiency. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Totam, officiis.
          </div>
          <div className=" w-[100%] flex flex-row items-center justify-center gap-2  ">
          <FaGithub className="text-4xl rounded-xl my-2"/>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
