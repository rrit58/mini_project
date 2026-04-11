import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Homepage from './pages/Homepage'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import About from './pages/About'
import AllDoctors from './pages/AllDoctors'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Cookie from './pages/Cookie'
import Legal from './components/Legal'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

const App = () => {
  
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <div className="pt-18 lg:pt-20">
        <Routes>
           <Route  path='/' element={<Homepage/>} />
         <Route  path='/appointment' element={<Appointment/>} />
         <Route  path='/contact' element={<Contact/>} />
         <Route  path='/about' element={<About/>} />
         <Route  path='/doctors' element={<AllDoctors/>} />
         <Route path='/doctors/:specialty' element={<AllDoctors />} />
         <Route path='/profile' element={<Profile/>} />
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
    </div>
   
  )
}

export default App