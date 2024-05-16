import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    setIsLogged(true);
    navigate("/todo");
  };

  const handleLogout = () => {
    localStorage.setItem("isLogged", "false");
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
