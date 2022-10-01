import React from 'react'
import none from '../images/none.png'

function Banner() {
  return (
    <div className='banner-container'>
        <div className='row'>
            <div className='col-1'>
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
                <h4>We know how large objects will act, but things on a small scale.</h4>
                <div className='cta'>
                    <button><h3>SHOP NOW</h3></button>
                </div>
            </div>
            <div className='col-2'>
                <img src={none} />
            </div>
        </div>
    </div>
  )
}

export default Banner