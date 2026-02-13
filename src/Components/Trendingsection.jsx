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
  const scrollLeft=()=>{
    console.log("clicked")
   
    scrollref.current?.scrollBy({
      left:-300,
      behavior:"smooth",
    })
    }
    const scrollRight=()=>{
      scrollref.current?.scrollBy({
        left:300,
        behavior:"smooth",
      }) 
    }
    // const cards = Array.from({ length: 15}, (_, i) => i + 1);
  return (
    <div>
       <div className='relative z-10'>
              <h1 className='font-bold text-3xl body-section  '>Trending Now</h1>
              <div className='flex  items-center'>
                <span className='
      '>
        <button onClick={scrollLeft}
        style={{
          position: "absolute",
          left: 0,
          top: "40%",
          zIndex: 10,
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          marginLeft:"50px",
        }}>
          <FaLessThan/>
        </button>

      </span>
              <div className='flex overflow-auto ml-60 gap-10 items-center' ref={scrollref}>
                
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
              <button  onClick={scrollRight}
        style={{
          position: "absolute",
          right: 0,
          top: "40%",
          zIndex: 10,
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}>
             <FaGreaterThan />
              </button>
              </div>
              </div>
    </div>
  )
}

export default Trendingsection
