import React from 'react'

const Mainbanner = () => {
  return (
    <div className='relative w-[90%] mx-auto rounded-3xl mt-3 overflow-hidden shadow-xl group px-4 bg-white'>
      
     
      <img 
        className='w-full h-150  rounded-3xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105'
        src="https://t4.ftcdn.net/jpg/13/48/50/71/240_F_1348507177_SgpRxmVBRAVNnucT9J2UGmsqQhHHVziV.jpg" 
        alt="Book Appointment Banner" 
      />

      
      <div className='absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent flex flex-col justify-center px-8 md:px-16 text-white'>
        
        
        <div className='flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 py-2 px-4 rounded-full w-fit mb-6 shadow-sm animate-fade-in-up'>
             {/* Pulsing Dot */}
             <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
             <p className='text-sm font-semibold tracking-wide text-white uppercase'>
               Need a medical consultation?
             </p>
        </div>

        {/* HEADLINE */}
        <h2 className='text-4xl md:text-6xl font-bold mb-4 leading-tight'>
          Your Health, <br />
          <span className='text-primary'>Our Priority</span>
        </h2>
        
        {/* DESCRIPTION */}
        <p className='text-base md:text-lg text-gray-200 max-w-lg leading-relaxed mb-8'>
          Bypass the waiting area and consult leading specialists instantly.
          Whether for preventive evaluation or acute medical attention, book your 
          appointment online today.
        </p>

        {/* BUTTON */}
        <button className='w-fit bg-accent hover:bg-tertiary hover:text-primary-light text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transform hover:-translate-y-1'>
          Schedule Appointment
        </button>

      </div>
    </div>
  )
}

export default Mainbanner