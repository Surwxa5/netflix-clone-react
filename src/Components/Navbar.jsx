import React from 'react'
import logo from "../Images/netflixlogo.jpg";
import bgImage from "../Images/BackgroundImage.jpg"

const Navbar = () => {
  return (
    <div>
      <div>
        <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgImage}` }} >
          <div>
            <img className='w-40' src={logo} alt="image" />
            <button className='bg-red-600 text-white border-'>singin</button>
          </div>
          {/* heading section */}
          <div className=' text-center text-white '>
            <h1 className='font-bold  text-7xl '>Unlimited movies,TV  <br />shows, and more</h1>
            <h2 className='font-semibold text-3xl mt-10'>Starts at USD 2.99. Cancel anytime.</h2>

            <p className='mt-10 text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          {/* input of hero section */}
          <div>
            <input type="text" placeholder='Email Address ' />
            <button>Get Started <span>></span> </button>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
