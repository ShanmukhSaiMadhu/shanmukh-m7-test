import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Pages from './components/Pages';

function App() {
  
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pages' element={<Pages />} />
      </Routes>
    </div>
    
  );
}

export default App;
