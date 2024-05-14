import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoItem from "./TodoItem/TodoItem";
import todoItems, { generatedId } from "../Utils";
import Add from "./Add/add";
import { useEffect, useState } from "react";

const Todo= () => {
    const [todos, setTodos] = useState(todoItems);
   
    function addNewTodoItem(title) {
        const newItem = {
            id: generatedId(),
            todo: title,
            complete: false,
        };
        console.log(newItem);
    setTodos(prevTodos => [...prevTodos, newItem]);

    };
    function updateTodoItem(id: number, newTitle: any) {
        const updatedTodos = todos.map(item => 
            item.id === id ? { ...item, todo: newTitle } : item
        );
        setTodos(updatedTodos);
    };
    function deleteTodoItem(id: number) {
        const updatedTodos = todos.filter(item => item.id !== id);
        setTodos(updatedTodos);
    };
    return(
        <>
         <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
          />
        </header>
      
          
                <ul className="list-group todos mx-auto text-light">

                {todos.map((item)=>(

                    <TodoItem key={item.id}  item={item} 
                    updateTodoItem={updateTodoItem} 
                    deleteTodoItem={deleteTodoItem}/> 
                ))}
            </ul>
            <Add addNewTodoItem={addNewTodoItem} />
            </>  
    )
}
export default  Todo;