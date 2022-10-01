import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    const count = useSelector(state => state.changeNumber)
  return (
    <div className='navbar-container'>
        <h3 className='nav-brand'>AccioJob</h3>
        <div className='navbar-collapse'>
            <ul className='navbar-nav1'>
                <li className='list-item'>
                    {/* <a href='#'>Home</a> */}
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='list-item'>
                    {/* <a href='#'>Shop</a> */}
                    <Link to='/shop' className='link'>Shop</Link>
                </li>
                <li className='list-item'>
                    {/* <a href='#'>About</a> */}
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li className='list-item'>
                    {/* <a href='#'>Blog</a> */}
                    <Link to='/blog' className='link'>Blog</Link>
                </li>
                <li className='list-item'>
                    {/* <a href='#'>Contact</a> */}
                    <Link to='/contact' className='link'>Contact</Link>
                </li>
                <li className='list-item'>
                    {/* <a href='#'>Pages</a> */}
                    <Link to='/pages' className='link'>Pages</Link>
                </li>
            </ul>

            <ul className='navbar-nav2'>
                
                <li className='list-item'>
                    {/* <img src={vector} /> */}
                    <a href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<g clip-path="url(#clip0_3_396)">
<path d="M5.99969 6C6.79534 6 7.55841 5.68393 8.12102 5.12132C8.68362 4.55871 8.99969 3.79565 8.99969 3C8.99969 2.20435 8.68362 1.44129 8.12102 0.87868C7.55841 0.316071 6.79534 0 5.99969 0C5.20405 0 4.44098 0.316071 3.87837 0.87868C3.31577 1.44129 2.99969 2.20435 2.99969 3C2.99969 3.79565 3.31577 4.55871 3.87837 5.12132C4.44098 5.68393 5.20405 6 5.99969 6V6ZM7.99969 3C7.99969 3.53043 7.78898 4.03914 7.41391 4.41421C7.03884 4.78929 6.53013 5 5.99969 5C5.46926 5 4.96055 4.78929 4.58548 4.41421C4.21041 4.03914 3.99969 3.53043 3.99969 3C3.99969 2.46957 4.21041 1.96086 4.58548 1.58579C4.96055 1.21071 5.46926 1 5.99969 1C6.53013 1 7.03884 1.21071 7.41391 1.58579C7.78898 1.96086 7.99969 2.46957 7.99969 3V3ZM11.9997 11C11.9997 12 10.9997 12 10.9997 12H0.999695C0.999695 12 -0.000305176 12 -0.000305176 11C-0.000305176 10 0.999695 7 5.99969 7C10.9997 7 11.9997 10 11.9997 11ZM10.9997 10.996C10.9987 10.75 10.8457 10.01 10.1677 9.332C9.5157 8.68 8.28869 8 5.99969 8C3.70969 8 2.48369 8.68 1.83169 9.332C1.15369 10.01 1.00169 10.75 0.999695 10.996H10.9997Z" fill="#23A6F0"/>
</g>
<defs>
<clipPath id="clip0_3_396">
<rect width="12" height="12" fill="white" transform="translate(-0.000305176)"/>
</clipPath>
</defs>
</svg>
                        Login/Register
                    </a>
                </li>
                <li className='list-item'><a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
        <path d="M26.7426 25.3439C27.7109 24.0226 28.1446 22.3844 27.9569 20.7571C27.7692 19.1298 26.974 17.6333 25.7304 16.5671C24.4867 15.5009 22.8863 14.9436 21.2494 15.0066C19.6125 15.0697 18.0598 15.7485 16.9019 16.9073C15.7439 18.066 15.0662 19.6192 15.0043 21.2562C14.9424 22.8931 15.5009 24.4931 16.568 25.736C17.6351 26.9789 19.1321 27.773 20.7596 27.9595C22.3871 28.1461 24.025 27.7112 25.3456 26.7419H25.3446C25.3746 26.7819 25.4066 26.8199 25.4426 26.8569L29.2926 30.7069C29.4801 30.8946 29.7345 31.0001 29.9997 31.0001C30.265 31.0002 30.5195 30.895 30.7071 30.7074C30.8947 30.5199 31.0002 30.2656 31.0003 30.0003C31.0004 29.735 30.8951 29.4806 30.7076 29.2929L26.8576 25.4429C26.8218 25.4068 26.7834 25.3733 26.7426 25.3429V25.3439ZM27.0006 21.4999C27.0006 22.2222 26.8583 22.9374 26.5819 23.6047C26.3055 24.272 25.9004 24.8783 25.3897 25.389C24.879 25.8998 24.2726 26.3049 23.6054 26.5813C22.9381 26.8577 22.2229 26.9999 21.5006 26.9999C20.7783 26.9999 20.0631 26.8577 19.3958 26.5813C18.7285 26.3049 18.1222 25.8998 17.6115 25.389C17.1008 24.8783 16.6957 24.272 16.4193 23.6047C16.1429 22.9374 16.0006 22.2222 16.0006 21.4999C16.0006 20.0413 16.5801 18.6423 17.6115 17.6109C18.643 16.5794 20.0419 15.9999 21.5006 15.9999C22.9593 15.9999 24.3582 16.5794 25.3897 17.6109C26.4211 18.6423 27.0006 20.0413 27.0006 21.4999Z" fill="#23A6F0"/>
        </svg>
                    </a>
                </li>
                <li className='list-item'>
                    <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
        <path d="M0.000305176 0.5C0.000305176 0.367392 0.0529836 0.240215 0.146752 0.146447C0.24052 0.0526784 0.367697 0 0.500305 0H2.00031C2.11184 3.08115e-05 2.22016 0.0373507 2.30804 0.106025C2.39592 0.174699 2.45831 0.270784 2.48531 0.379L2.89031 2H14.5003C14.5737 2.00007 14.6462 2.0163 14.7127 2.04755C14.7791 2.0788 14.8378 2.12429 14.8847 2.1808C14.9316 2.23731 14.9654 2.30345 14.9838 2.37452C15.0023 2.44558 15.0048 2.51984 14.9913 2.592L13.4913 10.592C13.4699 10.7066 13.409 10.8101 13.3194 10.8846C13.2297 10.9591 13.1169 10.9999 13.0003 11H4.00031C3.88374 10.9999 3.77087 10.9591 3.68122 10.8846C3.59156 10.8101 3.53075 10.7066 3.50931 10.592L2.01031 2.607L1.61031 1H0.500305C0.367697 1 0.24052 0.947322 0.146752 0.853553C0.0529836 0.759785 0.000305176 0.632608 0.000305176 0.5ZM3.10231 3L4.41531 10H12.5853L13.8983 3H3.10231ZM5.00031 11C4.46987 11 3.96116 11.2107 3.58609 11.5858C3.21102 11.9609 3.00031 12.4696 3.00031 13C3.00031 13.5304 3.21102 14.0391 3.58609 14.4142C3.96116 14.7893 4.46987 15 5.00031 15C5.53074 15 6.03945 14.7893 6.41452 14.4142C6.78959 14.0391 7.00031 13.5304 7.00031 13C7.00031 12.4696 6.78959 11.9609 6.41452 11.5858C6.03945 11.2107 5.53074 11 5.00031 11ZM12.0003 11C11.4699 11 10.9612 11.2107 10.5861 11.5858C10.211 11.9609 10.0003 12.4696 10.0003 13C10.0003 13.5304 10.211 14.0391 10.5861 14.4142C10.9612 14.7893 11.4699 15 12.0003 15C12.5307 15 13.0394 14.7893 13.4145 14.4142C13.7896 14.0391 14.0003 13.5304 14.0003 13C14.0003 12.4696 13.7896 11.9609 13.4145 11.5858C13.0394 11.2107 12.5307 11 12.0003 11ZM5.00031 12C5.26552 12 5.51988 12.1054 5.70741 12.2929C5.89495 12.4804 6.00031 12.7348 6.00031 13C6.00031 13.2652 5.89495 13.5196 5.70741 13.7071C5.51988 13.8946 5.26552 14 5.00031 14C4.73509 14 4.48073 13.8946 4.2932 13.7071C4.10566 13.5196 4.00031 13.2652 4.00031 13C4.00031 12.7348 4.10566 12.4804 4.2932 12.2929C4.48073 12.1054 4.73509 12 5.00031 12ZM12.0003 12C12.2655 12 12.5199 12.1054 12.7074 12.2929C12.8949 12.4804 13.0003 12.7348 13.0003 13C13.0003 13.2652 12.8949 13.5196 12.7074 13.7071C12.5199 13.8946 12.2655 14 12.0003 14C11.7351 14 11.4807 13.8946 11.2932 13.7071C11.1057 13.5196 11.0003 13.2652 11.0003 13C11.0003 12.7348 11.1057 12.4804 11.2932 12.2929C11.4807 12.1054 11.7351 12 12.0003 12Z" fill="#23A6F0"/>
        </svg><span className='cart-number'>{count}</span>
                    </a></li>
                <li className='list-item'>
                    <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <path d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z" fill="#23A6F0"/>
                        </svg>
                        <span className='cart-number'>1</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar