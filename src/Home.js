import React from 'react'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';

function Home() {
  return (
    <>
        {/* <Navbar /> */}
        <Banner />
        <h3 className='products-title'>Products</h3>
        <Products />
        <Footer />
    </>
  )
}

export default Home