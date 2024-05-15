import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.tsx";
import About from "../components/About/About.tsx";
import {createContext, useEffect, useState} from "react";
import {AuthContextProps} from "../types";
import Layout from "../components/Layout/Layout.tsx";
import TodoItemView from "../components/TodoItemView/TodoItemView.tsx";

export const AuthContext = createContext<AuthContextProps | null>(null);

function RouterOutlet() {
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
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout/>}>
            <Route index element={<App/>}/>
            <Route path='todos/:todoId' element={<TodoItemView/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default RouterOutlet