import React, { useContext, useState } from 'react'
import { AppContext } from '../Appcontext';
import Card from './Card'
import rightArrow from '../assets/rightArrow.png'

const Doctors = () => {
  // 1. Consume the data from Context
  const { doctors } = useContext(AppContext);

  // 2. UI State for "Show More" functionality
  const [visibleDoctors, setVisibleDoctors] = useState(10);

  const handleMore = () => {
    setVisibleDoctors((prev) => prev + 10);
  }

  return (
    <div className='flex flex-col items-center gap-4 py-16  text-text-secondary  mx-auto w-[90%] md:mx-10 '>
      
      <h1 className='text-4xl  font-bold'>Premier Physicians  for Appointment</h1>
      <p className='sm:w-1/3 text-center text-md text-text-secondary '>
        Effortlessly explore our curated network of trusted physicians.
      </p>

      {/* --- GRID LAYOUT --- */}
      <div className='w-full grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        
        {/* Render the doctors from Context */}
        {doctors.slice(0, visibleDoctors).map((item, idx) => (
           <Card key={idx} {...item} />
        ))}

      </div>

      {/* Show More Button Logic */}
      {visibleDoctors < doctors.length && (
        <button  
            onClick={handleMore}
            className='bg-white flex gap-2 text-primary border-2  px-12 py-3 rounded-full mt-10 hover:bg-pimary-light hover:text-black transition-all duration-300 font-medium'
        >
           See More 
            <img src={rightArrow} alt="rightarrow" />
        </button>
      )}

    </div>
  )
}

export default Doctors