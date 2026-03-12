import React, { useState } from 'react';


const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-accent bg-primary-light/10 text-text-primary text-sm placeholder-text-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition";

const CustomSelect = ({ value, onChange, options, placeholder, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* The visible "Input" box */}
      <div 
        className={`${inputCls} flex justify-between items-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={value ? "text-text-primary" : "text-text-secondary"}>
          {value || placeholder}
        </span>
        <span className="text-xs text-text-secondary">{isOpen ? '▲' : '▼'}</span>
      </div>
      
      {/* The Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-accent rounded-xl shadow-lg max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <div
              key={opt}
              className={`px-3.5 py-2.5 text-sm cursor-pointer transition-colors
                ${value === opt ? 'bg-primary-light text-accent font-semibold' : 'text-text-primary hover:bg-emerald-50 hover:text-accent-hover'}`}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
      
      {/* Invisible backdrop to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </div>
  );
};

export default CustomSelect;