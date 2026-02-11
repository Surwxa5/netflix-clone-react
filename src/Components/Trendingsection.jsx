import React, { useRef } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import image1 from "../Images/movies1.jpg"
import image2 from "../Images/movies2.jpg"
import image3 from "../Images/movies3.jpg"
import image4 from "../Images/movies4.jpg"
import image5 from "../Images/movies5.jpg"
import image6 from "../Images/movies6.jpg"
import image7 from "../Images/movies7.jpg"
import image8 from "../Images/movies2.jpg"
import image9 from "../Images/movies4.jpg"
import image10 from "../Images/movies1.jpg"

const Trendingsection = () => {
  // use to give the refrence
  const scrollref=useRef(null)
  const scrollleft=()=>{
    scrollref.current.scrollBy({
      left:-300,
      behavior:"smooth",
    })
    const scrollright=()=>{
      scrollref.current.scrollBy({
        left:300,
        behavior:"smooth",
      })
    }
  }
  return (
    <div>
       <div className='relative z-10'>
              <h1 className='font-bold text-3xl body-section  '>Trending Now</h1>
              <div className='flex  items-center'>
                <span><FaLessThan /></span>
              <div className='flex overflow-x-auto  gap-10 items-center'>
                
              <img className='h-70 w-50 mt-20 rounded-3xl   ' src={image1}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl' src={image2}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image3}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image4}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image5}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image6}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image7}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image8}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image9}   alt="image" />
              <img className='h-70 w-50 mt-20 rounded-3xl ' src={image10}   alt="image" />
              </div>
              <span><FaGreaterThan /></span>
              
              </div>
              </div>
    </div>
  )
}

export default Trendingsection
