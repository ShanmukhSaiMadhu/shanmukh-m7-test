import React, {useState} from 'react'
import facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'

function Footer() {
    const [yourEmail, setYourEmail] = useState('')

    const handleChangeInput = (e) => {
        setYourEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://acciojob-m7-test-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    emaild: yourEmail
                })
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log('data: ', data)
        })
        setYourEmail('')  
    }

  return (
    <div className='footer-container'>
        <div className='footer1'>
            <div className='footer1-container'>
                <div className='row'>
                    <div className='footer1-col-1'>
                        <div className='footer-brand'>
                            <h3>Acciojob</h3>
                        </div>
                    </div>
                    <div className='footer1-col-2'>
                        <div className='social-icons'>
                            <a href='#'>
                                <img src={facebook} className='facebook' />
                            </a>
                            
                            <a href='#'>
                                <img src={insta} className='instagram' />
                            </a>
                            
                            <a href='#'>
                                <img src={twitter} className='twitter' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hr'></div>
        <div className='footer2'>
            <div className='footer2-container'>
                <div className='row'>
                    <div className='footer2-col-1'>
                        <h5>Company Info</h5>
                        <div className='company-info'>
                            <a href='#' className='about-us'>About Us</a>
                            <a href='#' className='carrier'>Carrier</a>
                            <a href='#' className='hiring'>We are hiring</a>
                            <a href='#' className='blog'>Blog</a>
                        </div>
                    </div>
                    <div className='footer2-col-2'>
                        <h5>Legal</h5>
                        <div className='legal'>
                            <a href='#' className='about-us'>
                                About Us
                            </a>
                            <a href='#' className='carrier'>Carrier</a>
                            <a href='#' className='hiring'>We are hiring</a>
                            <a href='#' className='blog'>Blog</a>
                        </div>
                    </div>
                    <div className='footer2-col-3'>
                        <h5>Features</h5>
                        <div className='features'>
                            <a href='#' className='business'>
                                Busines Marketing
                            </a>
                            <a href='#' className='user'>User Analytic</a>
                            <a href='#' className='live-chat'>Live Chat</a>
                            <a href='#' className='support'>
                                Unlimited Support
                            </a>
                        </div>
                    </div>
                    <div className='footer2-col-4'>
                        <h5>Resources</h5>
                        <div className='resources'>
                            <a href='#' className='ios'>IOS & Android</a>
                            <a href='#' className='demo'>Watch a Demo</a>
                            <a href='#' className='customers'>Customers</a>
                            <a href='#' className='api'>API</a>
                        </div>
                    </div>
                    <div className='footer2-col-5'>
                        <h5>Get In Touch</h5>
                        <form onSubmit={handleSubmit}>
                            <input placeholder='Your Email' value={yourEmail} onChange={handleChangeInput} />
                            <button type='submit'>
                                Subscribe
                            </button>
                            <p>Lorem impsum dolor amit
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer3'>
            <div className='footer3-container'>
                <div className='row'>
                    <div className='footer3-col'>
                        <h6>Made With ❤️ at Acciojob</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer