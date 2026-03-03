import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Legal = () => {
    // 1. Shield Icon for Privacy
    const privacyIcon = (
        <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );

    // 2. Document Icon for Terms
    const termsIcon = (
        <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );

    // 3. Cookie Icon for Cookie Policy
    const cookieIcon = (
        <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18c1.6 0 3 .5 4 1.2.3.2.4.6.2.9-.1.2-.4.4-.7.4-1.4 0-2.6 1.2-2.6 2.6 0 .3.2.6.4.7.3.2.7.1.9-.2.7-1 2.1-1.6 3.6-1.6.3 0 .6.1.8.4.2.2.3.5.3.8A9.005 9.005 0 0112 21z" />
            <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="14" cy="16" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="10" cy="9" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="15" cy="11" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    );

    const sidebarLinks = [
        { name: "Privacy Policy", path: "/legal/privacy", icon: privacyIcon },
        { name: "Terms of Services", path: "/legal/terms", icon: termsIcon },
        { name: "Cookie Policy", path: "/legal/cookie", icon: cookieIcon },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top Navbar */}
            <div className="flex sticky top-0 items-center justify-center px-4 md:px-8 border-b border-accent py-3 bg-cyan-950 transition-all duration-300 z-40">
                 <img className="h-10 w-auto object-contain" src="../src/assets/logo2.png" alt="CareConnect logo" />
                 <span className="font-extrabold text-xl tracking-tight flex">
                    <span className="text-cyan-100">Care</span>
                    <span className="text-accent">Connect</span>
                </span>
                
            </div>

            {/* Main Layout Area */}
            <div className="flex flex-1">
                
                {/* Sidebar */}
                <div className="md:w-64 w-16  fixed left-0 bg-white border-r text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 shrink-0">
                    {sidebarLinks.map((item, index) => (
                        <NavLink 
                            to={item.path} 
                            key={index}
                            className={({ isActive }) => 
                                `flex items-center py-3 px-4 gap-3 transition-colors duration-200
                                ${isActive 
                                    ? "border-r-4 md:border-r-[6px] bg-primary border-accent text-cyan-950"
                                    : "hover:bg-primary-light/10 border-accent text-text-secondary"
                                }`
                            }
                        >
                            {item.icon}
                            <p className="md:block hidden text-center whitespace-nowrap">{item.name}</p>
                        </NavLink>
                    ))}
                </div>

                {/* Content Area (Where Privacy/Terms/Cookie will render) */}
                <div className="flex-1 p-6 md:p-10 bg-white overflow-y-auto">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default Legal;