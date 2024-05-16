import {createContext, ReactNode, useEffect, useState} from "react";
import {AuthContextProps} from "../types";

export const AuthContext = createContext<AuthContextProps | null>(null);

function AuthContextProvider({children}: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') == 'true')
  }, []);

  const setLoggedIn = () => {
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true)
  }

  const setLoggedOut = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn, setLoggedOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider