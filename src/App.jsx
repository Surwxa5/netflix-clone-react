import { useState } from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Trendingsection from './Components/Trendingsection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
       <Herosection/>
       <Trendingsection/>
    </>
  )
}

export default App
