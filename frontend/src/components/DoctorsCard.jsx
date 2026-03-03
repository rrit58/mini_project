import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorsCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-emerald-100/40 border border-emerald-50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      
      {/* Image Container */}
      <div className="h-64 overflow-hidden bg-emerald-50 flex items-center justify-center relative">
        <img 
          src={doctor.img} 
          alt={doctor.name} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Subtle gradient overlay at the bottom of the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
          {doctor.specialist}
        </span>
        <h3 className="text-xl font-bold text-cyan-950 mb-2">{doctor.name}</h3>
        
        {/* line-clamp-3 limits the text to 3 lines so all cards stay the same height */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1">
          {doctor.about}
        </p>
        
        {/* Book Button */}
        <button 
          onClick={() => navigate('/appointment')} 
          className="w-full bg-accent/10 text-text-secondary hover:bg-accent-hover hover:text-white font-semibold py-2.5 rounded-xl transition-colors mt-auto cursor-pointer"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorsCard;