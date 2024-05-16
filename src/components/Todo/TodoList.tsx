import React, {useEffect, useState} from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import "bootstrap/dist/css/bootstrap.css";

const TodoList = () => {
    const [todos, setTodos] = useState<{ priority: string; id: string; title: string }[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [priority, setPriority] = useState<string>("All");

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo: string) => {
            const newTodoItem = {
                id: `${Date.now()}`,
                title: newTodo,
                priority: priority !== "" ? priority : "P1",
            };
            setTodos([...todos, newTodoItem]);
    };

    const handleUpdateTodo = (id: string, updatedTitle: string) => {
        const updatedTodos = todos.map(todo => (todo.id === id ? {...todo, title: updatedTitle} : todo));
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredTodos = todos.filter(todo => {
        const matchTitle = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchPriority = priority === "All" || todo.priority === priority;
        return matchTitle && matchPriority;
    });

    const addPriority = (priority: string) => {
        setPriority(priority);
    };

    const getAll = () => {
        setPriority("All");
    };

    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="Search todos"
                    style={{backgroundColor: "white", color: "black"}}
                    value={searchQuery}
                    onChange={handleSearchQuery}
                />
            </header>

            <div>
                <div className="btn-group container d-flex align-items-center mb-3" role="group"
                     aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-dark btn-outline-dark text-light" onClick={getAll}>All
                    </button>
                    <button type="button"
                            className={`btn btn-outline-danger ${priority === "P1" ? 'btn-danger text-light' : ''}`}
                            onClick={() => {
                                addPriority("P1")
                            }}>P1
                    </button>
                    <button type="button"
                            className={`btn btn-outline-warning ${priority === "P2" ? 'btn-warning text-light' : ''} `}
                            onClick={() => {
                                addPriority("P2")
                            }}>P2
                    </button>
                    <button type="button"
                            className={`btn btn-outline-primary ${priority === "P3" ? 'btn-primary text-light' : ''}`}
                            onClick={() => {
                                addPriority("P3")
                            }}>P3
                    </button>
                    <button type="button"
                            className={`btn btn-outline-success ${priority === "P4" ? 'btn-success text-light' : ''}`}
                            onClick={() => {
                                addPriority("P4")
                            }}>P4
                    </button>
                </div>
                <div>
                    {filteredTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            priority={todo.priority}
                            title={todo.title}
                            onDelete={() => handleDeleteTodo(todo.id)}
                            onUpdate={(updatedTitle) => handleUpdateTodo(todo.id, updatedTitle)}
                        />
                    ))}
                </div>
            </div>

            <AddTodo onAddTodo={handleAddTodo}/>
        </div>
    );
};

export default TodoList;
