import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
const WebLayouts = () => {
  return (
    <>
    <div className='h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <div className='h-[95vh] w-full flex flex-col justify-start items-center'>
      <Outlet />
      </div>
    </div>
    </>
  )
}

export default WebLayouts