import React, {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- add loading state

  // Restore user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
    setLoading(false); // <-- done loading
  }, []);

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return <AuthContext.Provider value={{currentUser, setCurrentUser, loading}}>{children}</AuthContext.Provider>;
}
