import React from 'react'
import NavBar from '../components/NavBar'
import {FaJava,FaReact ,FaGithub} from 'react-icons/fa'
import {LiaCss3Alt} from'react-icons/lia'
import {SiMysql} from'react-icons/si'
import {TiHtml5 } from'react-icons/ti'
import ProfilePic from '../img/profile.png'
const Home = () => {
  return (
    <>
    <div className='w-screen h-screen bg-yellow-300 flex justify-center items-center flex-wrap'>
      <div className='w-[90%]  border-2 rounded-lg  bg-yellow-50 border-black shadow-lg flex justify-center items-center flex-row flex-wrap'>
        <div className=' flex text-justify justify-center flex-col w-[70%] '>
          <h1 className='flex my-9 ml-9 text-4xl font-bold justify-center items-center'>HEY &rarr; I AM PAVEEN KARTHIK S</h1>
          <p>I am a student at Sri Shakthi Institute of Engineering and Technology
             with a strong foundation in programming and web development. I have
              developed skills in Java, SQL, HTML, CSS, and React.js through my
               coursework and personal projects. Passionate about technology and 
               software development, I am eager to apply my knowledge and contribute 
               to innovative projects. I am looking for opportunities to further enhance 
               my skills and gain practical experience in the tech industry.</p>
               <div className=' flex flex-row justify-around'>
               <FaJava className='text-6xl hover:text-red-800 hover:border-2  my-14' />
               <SiMysql className='text-6xl  hover:text-blue-700 hover:border-2 my-14' />
               <TiHtml5 className='text-6xl hover:text-orange-600 hover:border-2  my-14' />
               <LiaCss3Alt className='text-6xl hover:text-blue-400 hover:border-2  my-14' />
               <FaReact className='text-6xl  hover:text-blue-600 hover:border-2  my-14' />
               <FaGithub className='text-6xl hover:border-2  my-14' />
               </div>
        </div>
        <div className='p-8  flex justify-center items-center shadow-sm '>
          <img className='h-[25rem] rounded-full shadow-sm ' src={ProfilePic} alt='placeholder' />
          </div>
       
      </div>

    </div>
    </>
  )
}

export default Home