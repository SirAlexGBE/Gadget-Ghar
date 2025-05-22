// contexts/AuthContext.js
import React, {createContext, useState, useEffect, useContext} from "react"; // <--- Add useContext here
import {useNavigate} from "react-router-dom"; // (You might not need useNavigate in the context itself, but it's fine if it's there)

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return <AuthContext.Provider value={{currentUser, setCurrentUser, loading, login, logout}}>{children}</AuthContext.Provider>;
}

// <--- ADD THIS CUSTOM HOOK --->
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
