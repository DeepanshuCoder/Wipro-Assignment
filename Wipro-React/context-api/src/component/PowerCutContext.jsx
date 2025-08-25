import React, { createContext, useContext, useState } from "react";

// create context
const PowerCutContext = createContext();
export const usePowerCut = () => useContext(PowerCutContext);

// provider component
export function PowerCutProvider({ children }) {
  const [announcements, setAnnouncements] = useState([]);

  // add new announcement at top
  const addAnnouncement = (street, message) => {
    const newOne = {
      id: Date.now(),
      street,
      message,
      time: new Date().toLocaleTimeString()
    };
    setAnnouncements([newOne, ...announcements]);
  };

  return (
    <PowerCutContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </PowerCutContext.Provider>
  );
}