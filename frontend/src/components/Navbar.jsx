import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserLogin from "./user/UserLogin";
import { useAppContext } from "../Appcontext";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Book Appointment", path: "/appointment" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { userData, logout } = useAppContext();

  return (
    <header className="w-full fixed top-0 z-50">

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

        {/* Right: Actions */}
        <div className="w-64 bg-cyan-50 flex items-center justify-center relative z-10 -ml-20 pl-16">

          {userData ? (
            <div className="relative group/profile cursor-pointer py-2">
              <div 
                className="flex items-center gap-2 text-sm font-semibold text-cyan-900 group-hover/profile:text-cyan-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-200 flex items-center justify-center overflow-hidden border border-cyan-300 group-hover/profile:border-cyan-500 transition-colors">
                  {userData.image ? (
                     <img src={userData.image} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                     <span className="text-cyan-700 font-bold">{userData.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <span className="border-b border-transparent group-hover/profile:border-cyan-500 pb-0.5 transition-all whitespace-nowrap">
                  Hi, {userData.name.split(' ')[0]}
                </span>
                <svg className="w-4 h-4 text-cyan-500 mt-1 transition-transform group-hover/profile:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>

              {/* Dropdown Pop-Up */}
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-200 transform origin-top-right group-hover/profile:translate-y-0 translate-y-2 z-50 overflow-hidden">
                <div className="px-5 py-4 bg-cyan-50 border-b border-gray-100/60">
                   <p className="text-xs text-gray-400 font-extrabold uppercase tracking-wider mb-1">Logged in as</p>
                   <p className="text-sm font-bold text-cyan-950 truncate">{userData.name}</p>
                   <p className="text-xs text-cyan-600 truncate mt-0.5 font-medium">{userData.email}</p>
                </div>
                <div className="p-2 bg-white">
                   <NavLink to="/profile" className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 font-medium hover:text-cyan-700 hover:bg-cyan-50 rounded-xl transition-all">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      My Profile
                   </NavLink>
                   <button onClick={logout} className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 font-medium hover:text-red-600 hover:bg-red-50 rounded-xl transition-all text-left mt-1 cursor-pointer">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      Logout
                   </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 bg-accent hover:bg-cyan-400 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 transform text-sm cursor-pointer whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Login
            </button>
          )}
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
            {userData ? (
              <div className="flex flex-col gap-3 py-2">
                <div className="text-center mb-1">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Logged in as</span>
                  <p className="text-sm font-bold text-cyan-900">{userData.name}</p>
                </div>
                <NavLink
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 font-semibold text-sm hover:bg-cyan-100 transition-colors w-full cursor-pointer"
                >
                  My Profile
                </NavLink>
                <button
                  onClick={() => { logout(); setIsMenuOpen(false); }}
                  className="px-6 py-2.5 rounded-full border border-red-200 text-red-600 font-semibold text-sm hover:bg-red-50 transition-colors w-full cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-cyan-400 text-white font-semibold py-3 rounded-full shadow-md transition-all duration-300 text-sm cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {isLoginOpen && <UserLogin onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
};

export default Navbar;