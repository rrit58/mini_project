import React, { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Department", path: "/department" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 ">
      
      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden lg:flex h-24 w-full bg-white ">
        
        
        <div className="flex-1 bg-primary rounded-r-[80px] flex items-center justify-between pl-8 xl:pl-16 pr-20 relative z-20 shadow-[10px_0_20px_rgba(0,0,0,0.1)]">
          
          
          <div className="flex items-center gap-3">
             {/* Assuming you have the image, if not, placeholder text is fine */}
             <img className='h-12 w-auto object-contain' src="../src/assets/logo2.png" alt="" />
            
            <span className="font-bold text-2xl tracking-wide drop-shadow-sm flex">
                <span className="text-violet-100"> Care </span>
                <span className="text-amber-500" >Connect</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 xl:gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-white/90 hover:text-white font-medium text-[15px] uppercase tracking-wide transition-all duration-300 hover:scale-110"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        
        <div className="w-70 bg-tertiary flex items-center justify-center relative z-10 -ml-24 pl-12 rounded-l-md">
           <button className="bg-accent hover:bg-white hover:text-accent text-white font-bold py-3.5 px-9 rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl whitespace-nowrap">
             Login 
           </button>
        </div>
      </div>


      {/* --- MOBILE LAYOUT  --- */}
      <div className="lg:hidden flex items-center justify-between bg-primary px-6 py-4 shadow-md">
        <div className="flex items-center gap-2">
           <img className='h-8 w-auto object-contain' src="../src/assets/logo2.png" alt="" />
          <span className="font-bold text-2xl tracking-wide drop-shadow-sm flex">
                <span className="text-violet-100"> Care </span>
                <span className="text-amber-500" >Connect</span>
            </span>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 shadow-xl" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-text-primary font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-accent text-white font-bold py-3 rounded-xl shadow-md mt-2">
            Login 
          </button>
        </div>
      </div>

    </header>
  );
};

export default Navbar;