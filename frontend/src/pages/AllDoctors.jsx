import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { useAppContext } from '../Appcontext';
import DoctorsCard from '../components/DoctorsCard';
import Footer from '../components/Footer';
import CustomSelect from '../components/CustomSelect'; // 👈 Make sure this path is correct

const AllDoctors = () => {
  const { doctors } = useAppContext();
  
  // 1. Get the specialty from the URL and setup navigation
  const { specialty } = useParams(); 
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  // 2. Initialize the state with the URL parameter 
  const [selectedDepartment, setSelectedDepartment] = useState(specialty ? specialty : 'All');
  const [expandedDepts, setExpandedDepts] = useState({});

  // 3. If the URL changes (user clicks back/forward), update the select dropdown
  useEffect(() => {
    setSelectedDepartment(specialty ? specialty : 'All');
  }, [specialty]);

  // 4. Update URL when user manually changes the dropdown
  // 👇 Updated to accept a string value directly instead of an event object (e)
  const handleDepartmentChange = (deptValue) => {
    // If the CustomSelect passes "All Departments", convert it back to "All" for our logic
    const dept = deptValue === 'All Departments' ? 'All' : deptValue;
    
    setSelectedDepartment(dept);
    
    if (dept === 'All') {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${dept}`);
    }
  };

  const filteredDoctors = doctors?.filter((doc) => {
    const matchesName = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDepartment === 'All' || doc.specialist === selectedDepartment;
    return matchesName && matchesDept;
  });

  const groupedDoctors = filteredDoctors?.reduce((acc, doctor) => {
    if (!acc[doctor.specialist]) acc[doctor.specialist] = [];
    acc[doctor.specialist].push(doctor);
    return acc;
  }, {});

  const allDepartments = ['All', ...new Set(doctors?.map(d => d.specialist))];

  const toggleExpand = (department) => {
    setExpandedDepts(prev => ({ ...prev, [department]: !prev[department] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Header */}
      <div className="bg-cyan-950 pt-14 pb-20 px-4 text-center relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img className="h-10 w-auto object-contain" src="../src/assets/logo2.png" alt="CareConnect" />
          <span className="font-extrabold text-xl tracking-tight flex">
            <span className="text-violet-100">Care</span>
            <span className="text-amber-500">Connect</span>
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 py-1.5 px-4 rounded-full mb-5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-green-300 uppercase">200+ Verified Specialists</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Meet Our <span className="text-cyan-400">Specialists</span>
        </h1>
        <p className="text-cyan-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
          Browse our roster of highly qualified medical professionals across multiple departments.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="max-w-3xl mx-auto px-4 -mt-8 relative z-10 mb-14">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/80 border border-gray-100 p-3 flex flex-col md:flex-row gap-3">

          {/* Search */}
          <div className="flex-1 relative z-10">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search doctor by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:bg-white transition-all"
            />
          </div>

          {/* 👇 Replaced with CustomSelect */}
          <div className="md:w-56 relative z-20"> {/* z-20 prevents dropdown from hiding behind doctor cards */}
            <CustomSelect
              // Map state 'All' to 'All Departments' for display
              value={selectedDepartment === 'All' ? 'All Departments' : selectedDepartment}
              
              // Map the options array so the UI says 'All Departments'
              options={allDepartments.map(dept => dept === 'All' ? 'All Departments' : dept)}
              
              onChange={handleDepartmentChange}
              placeholder="Select Department"
            />
          </div>

          {/* Search Button */}
          <button className="md:w-auto px-7 py-3.5 bg-accent hover:bg-cyan-400 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-md shadow-cyan-500/30 hover:-translate-y-0.5 transform z-10">
            Search
          </button>
        </div>
      </div>

      {/* Doctors Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16 relative z-0">
        {/* ... (Rest of your doctor grid mapping logic remains exactly the same!) ... */}
        {Object.keys(groupedDoctors || {}).length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-50 text-cyan-500 mb-5">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-400 text-sm">Try adjusting your search or selecting a different department.</p>
          </div>
        ) : (
          Object.entries(groupedDoctors).map(([department, docs]) => {
            const isExpanded = expandedDepts[department];
            const visibleDocs = isExpanded ? docs : docs.slice(0, 5);
            const hasMore = docs.length > 5;

            return (
              <div key={department} className="space-y-6">
                {/* Department Header */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-1 h-7 bg-cyan-500 rounded-full" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">{department}</h2>
                    <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full">
                      {docs.length} doctors
                    </span>
                  </div>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {visibleDocs.map((doctor, index) => (
                    <DoctorsCard key={`${doctor.name}-${index}`} doctor={doctor} />
                  ))}
                </div>

                {/* See More */}
                {hasMore && (
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => toggleExpand(department)}
                      className="flex items-center gap-2 px-7 py-2.5 rounded-full border border-cyan-200 text-cyan-700 bg-cyan-50 hover:bg-cyan-100 font-semibold text-sm transition-all duration-200 cursor-pointer"
                    >
                      {isExpanded ? 'Show Less' : `See All ${docs.length} Doctors`}
                      <svg
                        width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default AllDoctors;