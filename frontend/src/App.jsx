import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import About from './pages/About'
import AllDoctors from './pages/AllDoctors'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Cookie from './pages/Cookie'
import Legal from './components/Legal'

const App = () => {
  
  return (
    <div>
      <Routes>
         <Route  path='/' element={<Homepage/>} />
         <Route  path='/appointment' element={<Appointment/>} />
         <Route  path='/contact' element={<Contact/>} />
         <Route  path='/about' element={<About/>} />
         <Route  path='/doctors' element={<AllDoctors/>} />
         <Route path='/doctors/:specialty' element={<AllDoctors />} />
         <Route  path='/privacy' element={<PrivacyPolicy/>} />
         <Route  path='/terms' element={<Terms/>} />
         <Route  path='/cookie' element={<Cookie/>} />
         <Route path='/legal' element={<Legal/>}>
           <Route path='privacy' element={<PrivacyPolicy/>} />
           <Route path='terms' element={<Terms/>} />
           <Route path='cookie' element={<Cookie/>} />
         </Route>
      </Routes>
      
    </div>
   
  )
}

export default App