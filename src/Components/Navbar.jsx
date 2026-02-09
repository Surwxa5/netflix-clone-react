import React from 'react'
import logo from "../Images/netflixlogo.jpg";
import bgImage from "../Images/BackgroundImage.jpg"

import { PiGreaterThanBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className=''>
      <div>
        {/* inset 0 will cover the bg image to black */}
        <div className='h-screen bg-cover bg-center  ' style={{ backgroundImage: `url(${bgImage})` }} >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* nav bar */}
          <div className='relative z-10 flex  justify-between' >
            <img className='h-20' src={logo} alt="image"/>
            <button className='bg-red-700 h-14 w-36 px-3 py-1  text-white rounded-md'>signin</button>
          </div>
          {/* heading section */}
          <div className=' relative z-10 text-center text-white '>
            <h1 className='font-bold  text-7xl '>Unlimited movies,TV  <br />shows, and more</h1>
            <h2 className='font-semibold text-3xl mt-10'>Starts at USD 2.99. Cancel anytime.</h2>

            <p className='mt-10 text-2xl '>Ready to watch? Enter your email to create or restart your membership.</p>
            {/* input of hero section */}
          <div className=''>
            <input className='py-5 px-20' type="email" placeholder='Email Address ' />
            <button className='bg-red-700 text-white rounded-md py-5 px-25 flex items-center gap-3' ><span>Get Started </span><span><PiGreaterThanBold /></span></button>
          </div>
          </div>
          
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
