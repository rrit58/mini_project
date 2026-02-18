import React from 'react'
import { departments } from '../assets/departments'

const Departments = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' >
        
        {/* --- SECTION HEADER --- */}
        <div className='text-center mb-2 max-w-2xl px-2'>
            <h2 className='text-5xl font-bold tracking-tight mb-2 text-text-secondary'>Explore by Specialty</h2>
            <p className='text-2xl sm:text-base text-gray-500'>
                Effortlessly explore our curated network of trusted physicians.
            </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        {/* Added 'w-full max-w-5xl' to control width on large screens */}
        <div className="w-full max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-5">
            {departments.map((item, index) => (
                <div 
                    key={index} 
                    className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                    {/* Image Wrapper */}
                    <div className='mb-4 p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors'>
                         <img 
                            src={item.img} 
                            alt={item.dep} 
                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
                        />
                    </div>
                   
                    <p className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                        {item.dep}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Departments
