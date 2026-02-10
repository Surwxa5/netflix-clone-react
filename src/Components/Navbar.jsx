import React from 'react'
import logo from "../Images/logo1.jpg";
import bgImage from "../Images/BackgroundImage.jpg"

import { PiGreaterThanBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className='max-w-8xl'>
      <div>
        {/* inset 0 will cover the bg image to black */}
        <div className='h-screen bg-cover bg-center relative' style={{ backgroundImage: `url(${bgImage})` }} >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* nav bar */}
          <div className='relative z-10 flex justify-between items-center ml-45 mr-45 px-12 pt-6' >
            <img className='h-30' src={logo} alt="image"/>
            <button className='bg-red-600 hover:bg-red-700 px-5 py-2 text-white rounded-md font-semibold'>Sign in</button>
          </div>
          {/* heading section */}
          <div className='relative z-10 flex flex-col justify-center items-center text-center text-white h-[80vh] px-6'>
            <h1 className='text-5xl md:text-6xl font-bold max-w-3xl'>Unlimited movies,TV  <br />shows, and more</h1>
            <h2 className='text-2xl font-semibold mt-6'>Starts at USD 2.99. Cancel anytime.</h2>

            <p className='mt-6 text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
            {/* input of hero section */}
          <div className='flex flex-col md:flex-row gap-4 mt-6'>
            <input className='px-6 py-4 w-80 text-white border-2 border-white rounded-md'
    type="email"
    placeholder='Email address'  />
            <button className='bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-xl flex items-center gap-2 justify-center' ><span >Get Started </span><span><PiGreaterThanBold /></span></button>
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
