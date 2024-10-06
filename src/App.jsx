import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/contact'
import './index.css';
import WebLayouts from './layouts/WebLayouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<WebLayouts/>} >
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
