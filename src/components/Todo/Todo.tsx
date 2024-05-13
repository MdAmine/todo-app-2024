import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoItem from "./TodoItem/TodoItem";
import todoItems, { generatedId } from "../Utils";
import Add from "./Add/add";
import { useState } from "react";

const Todo= () => {
    const [todos, setTodos] = useState(todoItems);
    function addNewTodoItem(title) {
        const newItem = {
            id: 100,
            todo: title,
            complete: false,
        };
        console.log(newItem);
        let newTodoArray=todos ;
        newTodoArray.push(newItem);
       setTodos(newTodoArray);
        console.log(newTodoArray); 
    }
    return(
        <>
            <h1 className="mb-5">Todo List</h1><input
                type="text"
                className="form-control m-auto"
                name="search"
                placeholder="search todos" />
                <ul className="list-group todos mx-auto text-light">
                {todos.map((item)=>(
                    <TodoItem key={item.id}  item={item} />
                ))}
            </ul>
            <Add addNewTodoItem={addNewTodoItem} />
            </>  
    )
}
export default  Todo;