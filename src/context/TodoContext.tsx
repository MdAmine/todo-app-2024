import { createContext, useContext, useState } from "react";
import { todoItems } from "../Utils";

const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {

    const [todos,setTodos] = useState(todoItems);



    return (
        <TodoContext.Provider value={{ todos , setTodos }}>
          {children}
        </TodoContext.Provider>
      );
}

export const useTodosContext = () => useContext(TodoContext);
