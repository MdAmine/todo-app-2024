import './TodoList.css';
import { AddTodo } from "./AddTodo.tsx";
import { TodoItem } from "./TodoItem.tsx";
import { useState, useEffect } from 'react';

export function TodoList({ todosHome, setTodosHome }) {
    const [todos, setTodos] = useState(todosHome);
    const [filteredTodos, setFilteredTodos] = useState(todosHome);
    const [priority, setPriority] = useState('All');

    useEffect(() => {
        setFilteredTodos(todos);
    }, [todos]);

    const handleAddTodo = (newTodo) => {
        if (!todos.some(todo => todo.id === newTodo.id)) {
            const updatedTodos = [...todos, newTodo];
            setTodosHome(updatedTodos);
            setTodos(updatedTodos);
        } else {
            alert("Todo item already exists!");
        }
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodosHome(updatedTodos);
        setTodos(updatedTodos);
    };

    const handleEditTodo = (id, newTitle) => {
        const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo));
        setTodosHome(updatedTodos);
        setTodos(updatedTodos);
    };

    const handleSearchTodos = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        if (searchQuery) {
            setFilteredTodos(todos.filter(todo => todo.title.toLowerCase().includes(searchQuery)));
        } else {
            setFilteredTodos(todos);
        }
    };

    const handleCheckTodo = (id) => {
        const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
        setTodosHome(updatedTodos);
        setTodos(updatedTodos);
    };

    const handlePriorityFilter = (priority) => {
        setPriority(priority);
    };

    const filteredByPriorityTodos = priority === 'All' ? filteredTodos : filteredTodos.filter(todo => todo.priority === priority);

    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    placeholder="Search todos"
                    onChange={handleSearchTodos}
                />
            </header>
            <div className="btn-toolbar justify-content-between mb-3" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mx-auto" role="group" aria-label="Priority filter group">
                    {['All', 'P1', 'P2', 'P3', 'P4'].map((prio) => (
                        <button
                            key={prio}
                            type="button"
                            className={`btn ${priority === prio ? `btn-${getButtonColor(prio)}` : `btn-outline-${getButtonColor(prio)}`}`}
                            onClick={() => handlePriorityFilter(prio)}
                        >
                            {prio}
                        </button>
                    ))}
                </div>
            </div>
            {filteredByPriorityTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={handleEditTodo}
                    onDelete={handleDeleteTodo}
                    onCheck={handleCheckTodo}
                >
                    {todo.title}
                </TodoItem>
            ))}
            <AddTodo onAdd={handleAddTodo} priority={priority} />
        </>
    );

    function getButtonColor(priority) {
        switch (priority) {
            case 'P1':
                return 'danger';
            case 'P2':
                return 'warning';
            case 'P3':
                return 'primary';
            case 'P4':
                return 'success';
            default:
                return 'dark';
        }
    }
}
