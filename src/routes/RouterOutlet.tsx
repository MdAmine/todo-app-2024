import {lazy, Suspense} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from "../pages/Login.tsx";
import FloatingButton from "../components/UI/FloatingButton.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import About from "../pages/About.tsx";
import TodoDetail from "../pages/TodoDetail.tsx";

const Todos = lazy(() => import('../pages/Todos.tsx'));

const RouterOutlet = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>

                <Route path='/todos' element={
                    <>
                        <PrivateRoute>
                            <Todos/>
                            <FloatingButton/>
                        </PrivateRoute>
                    </>
                }/>
                <Route path="/todos/:id" element={<TodoDetail/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
            </>
        )
    )
    return <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router}/>
    </Suspense>
}

export default RouterOutlet