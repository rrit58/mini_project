import React, { createContext, useState, useContext } from 'react';
import { doctors, topDoctors } from './assets/doctors'; 
import { departments } from './assets/departments';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  
  const value = {
    doctors,    
    userData,
    setUserData,
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