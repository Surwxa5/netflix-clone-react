import React from 'react'
import reasonimage1 from '../Images/laptop.jpg'
import reasonimage2 from '../Images/downloadbutton.jpg'
import reasonimage3 from '../Images/watch.jpg'
import reasonimage4 from '../Images/emoji.jpg'

const Reasons = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold ml-60 mt-10'>More Reasons to Join</h1>
      <div className='flex mt-5 ml-45 mr-45  gap-3'>
      <div className='relative px-7 py-7 rounded-2xl bg-gray-700 shadow-2xl w-80 h-100'>
        <h1 className='text-3xl mt-5 font-bold text-white'>Enjoy on your TV</h1>
        <p className='text-lg mt-5 text-white opacity-70 '>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        <img src={reasonimage1}  className='w-20 absolute bottom-5 right-5' alt="image" />
      </div>
      <div className=' relative px-7 py-7 rounded-2xl bg-gray-700 shadow-2xl w-80 h-100'>
        <h1 className='text-3xl mt-5 font-bold text-white'>Download your shows to watch offline</h1>
        <p className='text-lg mt-5 text-white opacity-70 '>Save your favorites easily and always have something to watch.</p>
        <img src={reasonimage2}  className='w-20 absolute bottom-5 right-5' alt="image" />
      </div>
      <div className=' relative px-7 py-7 rounded-2xl bg-gray-700 shadow-2xl w-80 h-100'>
        <h1 className='text-3xl mt-5 font-bold text-white'>Watch everywhere</h1>
        <p className='text-lg mt-5 text-white opacity-70 '>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        <img src={reasonimage3}  className='w-20 absolute bottom-5 right-5' alt="image" />
      </div>
      <div className=' relative px-7 py-7 rounded-2xl bg-gray-700 shadow-2xl w-80 h-100'>
        <h1 className='text-3xl mt-5 font-bold text-white'>Create profiles for kids</h1>
        <p className='text-lg mt-5 text-white opacity-70 '>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
        <img src={reasonimage4}  className='w-20 absolute bottom-5 right-5' alt="image" />
      </div>
      </div>
    </div>
  )
}

export default Reasons
