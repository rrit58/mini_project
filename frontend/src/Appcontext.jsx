import React, { createContext, useState } from 'react';
// Import the data here so it's available globally
import { doctors } from './assets/doctors'; 

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const [userData, setUserData] = useState(null);
  
  const value = {
    doctors,    
    userData,
    setUserData,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;