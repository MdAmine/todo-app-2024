import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.tsx";
import About from "../components/About/About.tsx";
import Layout from "../components/Layout/Layout.tsx";
import TodoItemView from "../components/TodoItemView/TodoItemView.tsx";
import AuthContextProvider from "../context/AuthContextProvider.tsx";


function RouterOutlet() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout/>}>
            <Route index element={<App/>}/>
            <Route path='todos/:todoId' element={<TodoItemView/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default RouterOutlet