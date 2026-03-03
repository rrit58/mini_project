import React from 'react'
import { NavLink } from 'react-router-dom'

const Mainbanner = () => {
  return (
    <div className='relative w-[90%] mx-auto rounded-3xl mt-6 overflow-hidden shadow-2xl group'>

      {/* Background Image */}
      <img
        className='w-full h-[580px] object-cover object-center transition-transform duration-1000 ease-in-out group-hover:scale-105'
        src="https://t4.ftcdn.net/jpg/13/48/50/71/240_F_1348507177_SgpRxmVBRAVNnucT9J2UGmsqQhHHVziV.jpg"
        alt="Book Appointment Banner"
      />

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent' />

      {/* Decorative ring — top right */}
      <div className='absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/10 pointer-events-none' />
      <div className='absolute -top-8 -right-8 w-52 h-52 rounded-full border border-white/10 pointer-events-none' />

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-20 text-white'>

        {/* Badge */}
        <div className='flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 py-2 px-4 rounded-full w-fit mb-6 shadow-sm'>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
          </span>
          <p className='text-xs font-semibold tracking-widest text-green-300 uppercase'>
            Now Accepting Appointments
          </p>
        </div>

        {/* Headline */}
        <h2 className='text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-[1.1] tracking-tight'>
          Your Health,<br />
          <span className='text-cyan-400'>Our Priority.</span>
        </h2>

        {/* Description */}
        <p className='text-sm md:text-base text-gray-300 max-w-md leading-relaxed mb-8 font-light'>
          Skip the waiting room and connect with leading specialists instantly.
          Whether preventive care or urgent attention — we're here for you.
        </p>

        {/* Stats row */}
        <div className='flex items-center gap-6 mb-10'>
          {[
            { value: '200+', label: 'Specialists' },
            { value: '50k+', label: 'Patients' },
            { value: '4.9★', label: 'Rating' },
          ].map(({ value, label }) => (
            <div key={label} className='flex flex-col items-center border-r border-white/20 pr-6 last:border-0 last:pr-0'>
              <span className='text-xl md:text-2xl font-bold text-white'>{value}</span>
              <span className='text-xs text-gray-400 uppercase tracking-wider'>{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className='flex flex-wrap items-center gap-4'>
          <NavLink to='/appointment'>
            <button className='flex items-center gap-2 bg-accent hover:bg-cyan-400 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 transform text-sm md:text-base'>
              Schedule Appointment
              <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </button>
          </NavLink>

          <NavLink to='/doctors'>
            <button className='flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/25 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 transform text-sm md:text-base'>
              Meet Our Doctors
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Mainbanner