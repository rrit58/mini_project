import React, { useState, useEffect } from 'react';
import { useAppContext } from '../Appcontext';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';

const Profile = () => {
  const { userData, setUserData, loadUserProfile } = useAppContext();
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: { line1: '', line2: '' },
    gender: 'Not Selected',
    dob: ''
  });

  // Populate form data when userData becomes available
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '',
        address: userData.address || { line1: '', line2: '' },
        gender: userData.gender || 'Not Selected',
        dob: userData.dob ? userData.dob.split('T')[0] : ''
      });
    }
  }, [userData]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch('http://localhost:5000/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            userId: userData.id,
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            gender: formData.gender,
            dob: formData.dob
        })
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Profile updated successfully");
        setUserData(data.data); // Update context
        setIsEdit(false);
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  if (!userData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-50 text-cyan-700 font-semibold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          Please log in to view your profile
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="grow max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          
          {/* Header */}
          <div className="bg-cyan-950 px-8 py-8 relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
             
             <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                <div className="w-28 h-28 bg-white/10 backdrop-blur rounded-full border-[3px] border-white/20 p-1 shrink-0">
                    <img  
                        src={userData.image || "https://ui-avatars.com/api/?name=" + userData.name + "&background=0D8B93&color=fff&size=150"} 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover" 
                    />
                </div>
                <div className="text-center sm:text-left flex-1">
                    {/* Render name contextually depending on mode */}
                    {isEdit ? (
                        <input 
                            type="text" 
                            className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-2xl font-bold w-full max-w-md focus:outline-none focus:ring-2 focus:ring-cyan-400" 
                            value={formData.name} 
                            onChange={e => setFormData(prev => ({...prev, name: e.target.value}))} 
                        />
                    ) : (
                        <h1 className="text-3xl font-bold text-white mb-1">{userData.name}</h1>
                    )}
                    <p className="text-cyan-200 text-sm font-medium tracking-wide">Patient Profile</p>
                </div>
             </div>
          </div>

          {/* Details Body */}
          <div className="p-8 sm:p-10 space-y-10">
              
              {/* Contact Info */}
              <div>
                  <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wider text-sm flex items-center gap-2">
                       <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                       Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                          <label className="text-sm font-bold text-gray-400 uppercase">Email</label>
                          <p className="text-gray-800 font-medium px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100 text-sm">
                              {userData.email}
                          </p>
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-sm font-bold text-gray-400 uppercase">Phone</label>
                          {isEdit ? (
                              <input 
                                  type="text" 
                                  className="px-4 py-2.5 bg-white border border-cyan-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 text-sm text-gray-800 font-medium transition-all" 
                                  value={formData.phone} 
                                  onChange={e => setFormData(prev => ({...prev, phone: e.target.value}))} 
                                  placeholder="e.g. +1 234 567 890"
                              />
                          ) : (
                              <p className="text-gray-800 font-medium px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100 text-sm">
                                  {userData.phone || 'Not Provided'}
                              </p>
                          )}
                      </div>
                      <div className="flex flex-col gap-1 md:col-span-2">
                          <label className="text-sm font-bold text-gray-400 uppercase">Address</label>
                          {isEdit ? (
                              <div className="space-y-3">
                                  <input 
                                      type="text" 
                                      className="w-full px-4 py-2.5 bg-white border border-cyan-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 text-sm text-gray-800 font-medium transition-all" 
                                      value={formData.address.line1} 
                                      onChange={e => setFormData(prev => ({...prev, address: {...prev.address, line1: e.target.value}}))} 
                                      placeholder="Address Line 1"
                                  />
                                  <input 
                                      type="text" 
                                      className="w-full px-4 py-2.5 bg-white border border-gray-200 hover:border-cyan-400 focus:border-cyan-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 text-sm text-gray-800 font-medium transition-all" 
                                      value={formData.address.line2} 
                                      onChange={e => setFormData(prev => ({...prev, address: {...prev.address, line2: e.target.value}}))} 
                                      placeholder="Address Line 2"
                                  />
                              </div>
                          ) : (
                              <div className="text-gray-800 font-medium px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100 text-sm">
                                  {userData.address?.line1 ? (
                                      <>
                                          {userData.address.line1}
                                          {userData.address.line2 && <><br/>{userData.address.line2}</>}
                                      </>
                                  ) : 'Not Provided'}
                              </div>
                          )}
                      </div>
                  </div>
              </div>

              {/* Basic Info */}
              <div>
                  <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wider text-sm flex items-center gap-2">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                      Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                          <label className="text-sm font-bold text-gray-400 uppercase">Gender</label>
                          {isEdit ? (
                              <select 
                                  className="px-4 py-2.5 bg-white border border-cyan-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 text-sm text-gray-800 font-medium transition-all cursor-pointer"
                                  value={formData.gender}
                                  onChange={e => setFormData(prev => ({...prev, gender: e.target.value}))}
                              >
                                  <option value="Not Selected">Not Selected</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                              </select>
                          ) : (
                              <p className="text-gray-800 font-medium px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100 text-sm">
                                  {userData.gender || 'Not Selected'}
                              </p>
                          )}
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-sm font-bold text-gray-400 uppercase">Birthday</label>
                          {isEdit ? (
                              <input 
                                  type="date" 
                                  className="px-4 py-2.5 bg-white border border-cyan-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 text-sm text-gray-800 font-medium transition-all" 
                                  value={formData.dob} 
                                  onChange={e => setFormData(prev => ({...prev, dob: e.target.value}))} 
                              />
                          ) : (
                              <p className="text-gray-800 font-medium px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100 text-sm">
                                  {userData.dob ? new Date(userData.dob).toLocaleDateString('en-US', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                  }) : 'Not Provided'}
                              </p>
                          )}
                      </div>
                  </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex justify-end gap-4 border-t border-gray-100">
                  {isEdit ? (
                      <>
                          <button 
                              onClick={() => {
                                  setIsEdit(false);
                                  // Revert form data
                                  setFormData({
                                    name: userData.name || '',
                                    email: userData.email || '',
                                    phone: userData.phone || '',
                                    address: userData.address || { line1: '', line2: '' },
                                    gender: userData.gender || 'Not Selected',
                                    dob: userData.dob ? userData.dob.split('T')[0] : ''
                                  });
                              }}
                              className="px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                          >
                              Cancel
                          </button>
                          <button 
                              onClick={handleUpdate}
                              disabled={loading}
                              className={`px-8 py-2.5 rounded-xl font-bold text-white transition-all shadow-lg cursor-pointer ${loading ? 'bg-cyan-300 shadow-cyan-300/30' : 'bg-accent hover:bg-cyan-400 shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5'}`}
                          >
                              {loading ? 'Saving...' : 'Save Profile'}
                          </button>
                      </>
                  ) : (
                      <button 
                          onClick={() => setIsEdit(true)}
                          className="px-8 py-2.5 rounded-xl font-bold text-white bg-accent hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                      >
                          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                          Edit Profile
                      </button>
                  )}
              </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
