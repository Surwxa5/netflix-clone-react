import { useState } from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Trendingsection from './Components/Trendingsection'
import Reasons from './Components/reasons'
import Askedquestion from './Components/Askedquestion'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)
  // a component is a piece of code that can be used in other component also can be used in pages

  return (
    <>
     <Navbar/>
       <Herosection/>
       <Trendingsection/>
       <Reasons/>
       <Askedquestion/>
       <Footer/>
    </>
  )
}

export default App
