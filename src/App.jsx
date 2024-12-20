import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Graphic from './assets/graphic/Graphic'
import About from './assets/graphic/About'
import Portfolio from './assets/graphic/Portfolio'
import Services from './assets/graphic/Services'
import Singup from './assets/graphic/Singup'
import Dashborad from './assets/graphic/Dashborad'
import Display from './assets/graphic/Display'
function App() {


  return (
    <>
   
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Graphic />} />
    <Route path='/about'  element={<About />} />
    <Route path='/port'  element={ <Portfolio /> }/>
    <Route path='/service'  element={<Services />} />
    <Route  path='/singup' element={<Singup />} />
    <Route path='/dash' element={ <Dashborad/>} />
    <Route path='/display' element={<Display/>} />
    </Routes>
    </BrowserRouter>
   
    </>

  )
}

export default App
