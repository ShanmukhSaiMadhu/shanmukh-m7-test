import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <h3 className='products-title'>Products</h3>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
