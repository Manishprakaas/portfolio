

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
import Resume from "./Resume";
import About from "./About";
import Navbar from "./Nav";
import React from 'react'

const portfolio = () => {
  return (
    <div>
      <>
        <div className='pages'>

          <Navbar />
          <Home />
          <About />
          <Resume />
          <Contact />

        </div>





      </>

    </div>
  )
}
export default portfolio
