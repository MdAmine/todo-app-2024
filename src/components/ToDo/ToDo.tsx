
import { useState } from "react";
import { generateId, todoItems } from "../../Utils";
import AddToDo from "./AddToDo";
import { TodoItem } from "./TodoItem";
import './todo.css';


export default function ToDo() {

    const [searchQuery, setSearchQuery] = useState("");
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
    
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const editTodo = (id, title) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

     const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        todoItems.splice(todoItems.findIndex(todo => todo.id === id), 1);
        console.log("todoItems",todoItems);
        console.log("todos" , todos);
    };

    const handleOnCheck = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setTodos(updatedTodos);
        console.log("todos",todos);
    }

    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </header>


            {filteredTodos.map((item) => (
                <TodoItem key={item.id} item={item} onEdit={editTodo} onDelete={handleDeleteTodo} onCheck={handleOnCheck}></TodoItem>
            ))}

            <AddToDo onAdd={addTodo}></AddToDo>

        </>
        

    );
    }