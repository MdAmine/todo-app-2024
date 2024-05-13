
import { useState } from "react";
import { generateId, todoItems } from "../../Utils";
import AddToDo from "./AddToDo";
import { TodoItem } from "./TodoItem";
import './todo.css';


export default function ToDo() {

    

    const [todos, setTodos] = useState(todoItems);
    const addTodo = (title) => {
        const newTodo = {
        id: generateId(),
        title: title,
        complete: false,
        };
        setTodos([...todos, newTodo]);
        todoItems.push(newTodo);
    };

     const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        todoItems.splice(todoItems.findIndex(todo => todo.id === id), 1);
        console.log("todoItems",todoItems);
        console.log("todos" , todos);
    };

    return (
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


            {todoItems.map((item) => (
                <TodoItem key={item.id} item={item} onDelete={handleDeleteTodo}></TodoItem>
            ))}

            <AddToDo onAdd={addTodo}></AddToDo>

        </>
        

    );
    }