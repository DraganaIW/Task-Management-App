import React, { useState, createContext } from "react";

export const WorkspaceContext = createContext();

export const WorkspaceProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [teamMembers, setTeamMembers] = useState(["Petar R", "Dragana V", "Kristina R"]);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  return (
    <WorkspaceContext.Provider value={{ authenticated, setAuthenticated, teamMembers, currentDate, setCurrentDate }}>
      {children}
    </WorkspaceContext.Provider>
  );
};