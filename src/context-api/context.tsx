import { createContext, useState } from "react";
import {
  isAuthenticated,
  loginUser,
  logoutUser,
} from "../service/auth.service";

export const AuthContext = createContext({
  login: (user: { email; passwordy }) => {},
  logout: () => {},
  isAuthenticated: () => false,
});

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  const login = (user) => {
    loginUser(user);
    setAuthenticated(true);
  };

  const logout = () => {
    logoutUser();
    setAuthenticated(false);
  };

  const value = {
    login,
    logout,
    isAuthenticated: isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
