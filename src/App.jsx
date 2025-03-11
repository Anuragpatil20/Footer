import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer'
import Aboutpage from './Pages/Aboutpage'
import Contactpage from './Pages/Contactpage'
import Servicespage from './Pages/Servicespage'
import Gallerypage from './Pages/Gallerypage'
import Homepage from './Pages/Homepage'
import Helpe from './Pages/Helpe'
import Privacy from './Component/Privacy'
import Privacypage from './Pages/Privacypage'


function App() {
  return (
    <Routes>
    <Route path='/' element={<Footer/>}/>
    <Route path='/about' element ={<Aboutpage/>}/>
    <Route path='/contact' element ={<Contactpage/>}/>
    <Route path='/services' element ={<Servicespage/>}/>
    <Route path='/gallery' element ={<Gallerypage/>}/>
    <Route path='/home' element ={<Homepage/>}/>
    <Route path='/condition' element ={<Contactpage/>}/>
    <Route path='/help' element ={<Helpe/>}/>
    <Route path='/privacy' element ={<Privacypage/>}/>
    </Routes>
  )
}

export default App