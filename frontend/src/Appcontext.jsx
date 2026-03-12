import React, { createContext, useState, useEffect, useContext } from 'react';
import { topDoctors as hardcodedTopDoctors } from './assets/doctors'; 
import { departments } from './assets/departments';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [topDoctors, setTopDoctors] = useState([]);

  // Load user profile if a token exists
  const loadUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch('http://localhost:5000/api/users/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (result.success) {
        setUserData(result.data);
      } else {
        // Token might be invalid/expired
        localStorage.removeItem('token');
        setUserData(null);
      }
    } catch (error) {
      console.error('Failed to load user profile:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserData(null);
    import('react-toastify').then(({ toast }) => toast.info('Logged out successfully'));
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        const result = await response.json();
        if (result.success) {
          const mappedDoctors = result.data.map(doc => ({
            ...doc,
            specialist: doc.specialty,
            img: doc.image_url
          }));
          setDoctors(mappedDoctors);
          // Set top doctors based on the first 10 for now, or match hardcoded names
          setTopDoctors(mappedDoctors.slice(0, 10)); 
        }
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };
    fetchDoctors();
    loadUserProfile(); // <-- Invoke on mount
  }, []);
  
  const value = {
    doctors,    
    userData,
    setUserData,
    loadUserProfile,
    logout,
    topDoctors
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext=()=>{
    return useContext(AppContext);
}