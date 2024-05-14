
import { useState } from "react";
import { generateId, todoItems } from "../../Utils";
import AddToDo from "./AddToDo";
import { TodoItem } from "./TodoItem";
import './todo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";


export default function ToDo() {

    const [searchQuery, setSearchQuery] = useState("");
    const [priority, setPriority] = useState();
    const [todos, setTodos] = useState(todoItems);
    const addTodo = (title) => {
        const newTodo = {
            id: generateId(),
            title: title,
            complete: false,
            priority: 'low',
        };
        setTodos([...todos, newTodo]);
    };
    
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    const filteredTodos = todos.filter(todo =>{
        if (priority) {
           return todo.priority.includes(priority) && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        }
           return todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        }
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

    const handleSetPriority = (priority) => {
        console.log("priority", priority);
        setPriority(priority);
    };


    const editPriority = (id, priority) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.priority = priority;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <div className="d-flex justify-content-between align-items-center mb-3">
                        <button
                        className="btn btn-sm btn-secondary mr-2"
                        onClick={() => handleSetPriority("low")}
                        >
                        Low
                        </button>
                        <button
                        className="btn btn-sm btn-warning mr-2"
                        onClick={() => handleSetPriority("medium")}
                        >
                        Medium
                        </button>
                        <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleSetPriority("high")}
                        >
                        High
                        </button>
                        <button
                        className="btn btn-sm btn-info"
                        onClick={() => handleSetPriority("")}
                        >
                        <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                        </button>
                </div>
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
                <TodoItem key={item.id} item={item} onEdit={editTodo} onDelete={handleDeleteTodo} onCheck={handleOnCheck} onEditP={editPriority}></TodoItem>
            ))}

            <AddToDo onAdd={addTodo}></AddToDo>

        </>
        

    );
    }