
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChat from './Components/LineChart/LineChat'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'

import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
  
     <NavBar></NavBar>
     <DaisyNav></DaisyNav>
     <PriceOptions></PriceOptions>
     <LineChat></LineChat>
     <Phones></Phones>
    </>
  )
}

export default App
