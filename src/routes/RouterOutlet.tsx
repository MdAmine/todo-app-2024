import {lazy, Suspense} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from "../components/Login.tsx";
import FloatingButton from "../components/UI/FloatingButton.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import About from "../components/about/About.tsx";
import TodoDetail from "../components/todos/TodoDetail.tsx";

const Todos = lazy(() => import('../components/todos/Todos.tsx'));

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