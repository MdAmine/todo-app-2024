import {lazy, Suspense, useEffect, useState} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from "../components/Login.tsx";
import FloatingButton from "../components/UI/FloatingButton.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import About from "../components/about/About.tsx";

const Todos = lazy(() => import('../components/todos/Todos.tsx'));

const RouterOutlet = () => {
    const defaultLogged = localStorage.getItem('isLogged');
    const [isLoggedIn, setIsLoggedIn] = useState(defaultLogged === "true");

    const loginHandler = () => {
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        setIsLoggedIn(false);
    }

    useEffect(() => {
        localStorage.setItem('isLogged', String(isLoggedIn));
    }, [isLoggedIn]);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/todos' element={
                    <>
                        <PrivateRoute>
                            <Todos/>
                            <FloatingButton logoutHandler={logoutHandler}/>
                        </PrivateRoute>
                    </>
                }/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login loginHandler={loginHandler}/>}/>
            </>
        )
    )
    return <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router}/>
    </Suspense>
}

export default RouterOutlet