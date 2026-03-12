import React from 'react'
import Mainbanner from '../components/Mainbanner'
import Departments from '../components/Departments'
import Doctors from '../components/Doctors'
import Testimonals from '../components/Testimonals'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div  >
      <Mainbanner/>
      <Departments/>
      <Doctors/>
      <Testimonals/>
      <Footer/>
    </div>
  )
}

export default Homepage
