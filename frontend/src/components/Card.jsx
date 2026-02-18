import React from 'react';

const Card = ({ name, img, specialist }) => {
  return (
    <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500 shadow-sm hover:shadow-lg bg-white w-full'>
      
      {/* Image Section */}
      <div className='bg-blue-50 w-full relative'>
        {/* 'object-cover' and 'objec-top' ensures the face is always visible */}
        <img 
            className='w-full h-64 object-cover object-top hover:bg-blue-100 transition-colors duration-300' 
            src={img} 
            alt={name} 
        />
      </div>

      {/* Info Section */}
      <div className='p-4'>
        {/* Status Indicator */}
        <div className='flex items-center gap-2 text-sm text-green-500 mb-2'>
            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
            <p className='font-medium'>Available</p>
        </div>

        <h2 className='text-gray-900 text-xl font-medium mb-1'>{name}</h2>
        <p className='text-gray-600 text-sm'>{specialist}</p>
      </div>

    </div>
  )
}

export default Card;