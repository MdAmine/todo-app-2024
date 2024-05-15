import './TodoList.css';
import { AddTodo } from "./AddTodo.tsx";
import { TodoItem } from "./TodoItem.tsx";
import { useState } from 'react';

export function TodoList({todosHome, setTodosHome}) {
    const [todos, setTodos] = useState(todosHome);
    const [filteredTodos, setFilteredTodos] = useState(todosHome);
    const [priority, setPriority] = useState('All');

    const handleAddTodo = (newTodo) => {
        if (!todos.some(todo => todo.id === newTodo.id)) {
            const updatedTodos = [...todos, newTodo];
            setTodosHome(updatedTodos)
            setTodos(updatedTodos);
            setFilteredTodos(updatedTodos);
        } else {
            alert("Todo item already exists!");
        }
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        setTodosHome(updatedTodos)
        setFilteredTodos(updatedTodos);
    };

    const handleEditTodo = (id, newTitle) => {
        const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo));
        setTodos(updatedTodos);
        setTodosHome(updatedTodos)
        setFilteredTodos(updatedTodos);
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
        setTodos(updatedTodos);
        setTodosHome(updatedTodos)
        setFilteredTodos(updatedTodos);
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
                <div className="btn-group mx-auto" role="group" aria-label="First group">
                    <button type="button" className={`btn ${priority === 'All' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => handlePriorityFilter('All')}>All</button>
                    <button type="button" className={`btn ${priority === 'P1' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => handlePriorityFilter('P1')}>P1</button>
                    <button type="button" className={`btn ${priority === 'P2' ? 'btn-warning' : 'btn-outline-warning'}`} onClick={() => handlePriorityFilter('P2')}>P2</button>
                    <button type="button" className={`btn ${priority === 'P3' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handlePriorityFilter('P3')}>P3</button>
                    <button type="button" className={`btn ${priority === 'P4' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => handlePriorityFilter('P4')}>P4</button>
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
}
