import React from 'react'
import { Link } from 'react-router-dom' 
import logo from '../assets/logo.png'

const Footer = () => {
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Appointments', path: '/appointment' },
    { name: 'Contact', path: '/contact' }
  ];
 const quickLinks2 = [
    { name: 'Privacy Policy', path: '/legal/privacy' },
    { name: 'Terms of Services', path: '/legal/terms' },
    { name: 'Cookie Policy', path: '/legal/cookie' },
  ];

  return (
    <footer className='bg-cyan-950 mt-20'>

      {/* Top accent bar */}
      <div className='h-1 w-full bg-cyan-400' />

      <div className='max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10'>

        {/* Main Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

          {/* 1. Brand Section */}
          <div className='flex flex-col gap-4'>
            <img
              className='w-36 object-contain'
              src={logo}
              alt="CareConnect Logo"
            />
            <p className='text-cyan-100 text-sm leading-relaxed'>
              Providing quality healthcare solutions for a healthier, better life — every step of the way.
            </p>
            {/* Social Icons */}
            <div className='flex gap-4 mt-2'>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-cyan-800 flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300">
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-cyan-800 flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300">
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-cyan-800 flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300">
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-white font-semibold text-base uppercase tracking-widest'>Quick Links</h3>
            <div className='h-0.5 w-8 bg-cyan-400 rounded-full' />
            <ul className='space-y-2.5'>
             
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className='text-cyan-200 text-sm hover:text-cyan-400 hover:pl-1 transition-all duration-200 flex items-center gap-2'
                  >
                    <span className='w-1 h-1 rounded-full bg-cyan-400 inline-block' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-white font-semibold text-base uppercase tracking-widest'>Contact Us</h3>
            <div className='h-0.5 w-8 bg-cyan-400 rounded-full' />
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-cyan-800 flex items-center justify-center shrink-0 mt-0.5'>
                  <svg className='w-4 h-4 text-cyan-300 fill-current' viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className='text-cyan-200 text-sm leading-relaxed'>101, CareConnect Tower,<br />Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051</p>
              </li>
              <li className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-cyan-800 flex items-center justify-center shrink-0'>
                  <svg className='w-4 h-4 text-cyan-300 fill-current' viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className='text-cyan-200 text-sm'>+91 22 2345 6789</p>
                  <p className='text-cyan-200 text-sm'>+91 11 9876 5432</p>
                </div>
              </li>
              <li className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-cyan-800 flex items-center justify-center shrink-0'>
                  <svg className='w-4 h-4 text-cyan-300 fill-current' viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className='text-cyan-200 text-sm'>support@careconnect.com</p>
                  <p className='text-cyan-200 text-sm'>info@careconnect.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 4. Working Hours */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-white font-semibold text-base uppercase tracking-widest'>Working Hours</h3>
            <div className='h-0.5 w-8 bg-cyan-400 rounded-full' />
            <ul className='space-y-3'>
              {[
                { day: 'Monday – Friday', hours: '8:00 AM – 8:00 PM' },
                { day: 'Saturday', hours: '9:00 AM – 6:00 PM' },
                { day: 'Sunday', hours: '10:00 AM – 4:00 PM' },
              ].map(({ day, hours }) => (
                <li key={day} className='flex flex-col gap-0.5 border-b border-cyan-800 pb-3 last:border-0'>
                  <span className='text-white text-sm font-medium'>{day}</span>
                  <span className='text-cyan-400 text-sm'>{hours}</span>
                </li>
              ))}
              <li className='flex items-center gap-2 mt-1'>
                <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
                <span className='text-green-400 text-sm font-medium'>Emergency: 24/7</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className='border-t border-cyan-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3'>
          <p className='text-cyan-400 text-sm'>© 2026 CareConnect. All rights reserved.</p>
          <div className='flex gap-6'>
            {quickLinks2.map(item => (
              <Link  className='text-cyan-400 text-sm'
              to={item.path} 
              key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer