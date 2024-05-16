
import { useState } from "react";
import { generateId, todoItems } from "../../Utils";
import AddToDo from "./AddToDo";
import { TodoItem } from "./TodoItem";
import './todo.css';
import { useAuth } from "../../context/AuthContext";

export default function ToDo() {

    const [searchQuery, setSearchQuery] = useState("");
    const [priority, setPriority] = useState();
    const [todos, setTodos] = useState(todoItems);
    const [listPriority, setListPriority] = useState([]);

    const { login , isLogged } = useAuth();

    const addTodo = (title) => {
        const newTodo = {
            id: generateId(),
            title: title,
            complete: false,
            priority: priority || 'P1',
        };
        setTodos([...todos, newTodo]);
    };
    
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    const filteredTodos = todos.filter(todo => {
        if (listPriority.length > 0) {
            return listPriority.includes(todo.priority) && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    console.log("login = ",login);
    console.log("isLogged = ",isLogged);
    
    
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
        if (priority == '') {
            setListPriority([]);
        } else if (listPriority.includes(priority)) {
            setListPriority(listPriority.filter(item => item !== priority));
        }else {
            setListPriority([...listPriority, priority]);
        }
        setPriority(priority);
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
                    value={searchQuery}
                    onChange={handleSearch}
                />
                 
                <div className="btn-group mt-4" role="group" aria-label="Basic example">
                    <button type="button" className={`btn btn-outline-dark ${listPriority.length === 0 ? 'active' : ''}`} onClick={()=>handleSetPriority('')}>All</button>
                    <button type="button" className={`btn btn-outline-danger ${listPriority.includes('P1') ? 'active' : ''}`} onClick={()=>handleSetPriority('P1')}>P1</button>
                    <button type="button" className={`btn btn-outline-warning ${listPriority.includes('P2') ? 'active' : ''}`} onClick={()=>handleSetPriority('P2')}>P2</button>
                    <button type="button" className={`btn btn-outline-primary ${listPriority.includes('P3') ? 'active' : ''}`} onClick={()=>handleSetPriority('P3')}>P3</button>
                    <button type="button" className={`btn btn-outline-success ${listPriority.includes('P4') ? 'active' : ''}`} onClick={()=>handleSetPriority('P4')}>P4</button>
                </div>
            </header>


            {filteredTodos.map((item) => (
                <TodoItem key={item.id} item={item} onEdit={editTodo} onDelete={handleDeleteTodo} onCheck={handleOnCheck}></TodoItem>
            ))}

            <AddToDo onAdd={addTodo}></AddToDo>

        </>
        

    );
    }