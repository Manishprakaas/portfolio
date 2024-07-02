import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './Component/Contact';
import Home from './Component/Home'
import Resume from './Component/Resume';
import About from './Component/About';
import React from 'react';
import Navbar from './Component/Nav';

function App() {
  return (
    <div className='box'>
      
      <Router>

<Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
