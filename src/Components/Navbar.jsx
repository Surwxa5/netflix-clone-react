import React from 'react'
import logo from "../Images/logo1.jpg";



const Navbar = () => {
  return (
    <div className='max-w-8xl'>
      <div>
            {/* nav bar */}
          <div className='relative z-10 flex justify-between items-center navbar  px-12 pt-6' >
            <img className='h-30' src={logo} alt="image"/>
            <button className='bg-red-600 hover:bg-red-700 px-5 py-2 text-white rounded-md font-semibold'>Sign in</button>
          </div>
          </div>
        </div>
       
 
  )
}

export default Navbar
