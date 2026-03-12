import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserLogin from "./user/UserLogin";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden lg:flex h-20 w-full bg-white shadow-md">

        {/* Left: Logo + Nav */}
        <div className="flex-1 bg-cyan-950 rounded-r-[72px] flex items-center justify-between pl-8 xl:pl-16 pr-16 shadow-[8px_0_24px_rgba(0,0,0,0.15)] relative z-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img className="h-10 w-auto object-contain" src="../src/assets/logo2.png" alt="CareConnect logo" />
            <span className="font-extrabold text-xl tracking-tight flex">
              <span className="text-cyan-100">Care</span>
              <span className="text-accent">Connect</span>
            </span>
          </NavLink>

          {/* Nav Links */}
          <nav className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold uppercase tracking-widest transition-colors duration-200 group
                  ${isActive ? "text-cyan-400" : "text-white/70 hover:text-white"}`
                }
              >
                {link.name}
                {/* Underline indicator */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right: Login */}
        <div className="w-64 bg-cyan-50 flex items-center justify-center relative z-10 -ml-20 pl-16">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center gap-2 bg-accent hover:bg-cyan-400 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 transform text-sm cursor-pointer whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Login
          </button>
        </div>
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="lg:hidden flex items-center justify-between bg-cyan-950 px-6 py-4 shadow-lg">
        <NavLink to="/" className="flex items-center gap-2">
          <img className="h-8 w-auto object-contain" src="../src/assets/logo2.png" alt="CareConnect logo" />
          <span className="font-extrabold text-xl tracking-tight flex">
            <span className="text-cyan-100">Care</span>
            <span className="text-accent">Connect</span>
          </span>
        </NavLink>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 shadow-xl" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2.5 px-3 rounded-lg font-medium text-sm transition-colors duration-200
                ${isActive ? "bg-cyan-50 text-cyan-600" : "text-gray-600 hover:bg-gray-50 hover:text-cyan-600"}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-gray-100 mt-2">
            <button
              onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-cyan-400 text-white font-semibold py-3 rounded-full shadow-md transition-all duration-300 text-sm cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>

      {isLoginOpen && <UserLogin onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
};

export default Navbar;