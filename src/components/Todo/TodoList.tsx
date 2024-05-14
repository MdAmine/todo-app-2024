import './TodoList.css';
import { AddTodo } from "./AddTodo.tsx";
import { TodoItem } from "./TodoItem.tsx";
import { todoItems as initialTodoItems } from '../../Utils.tsx';
import { useState } from 'react';

export function TodoList() {
    const [todos, setTodos] = useState(initialTodoItems);

    const handleAddTodo = (newTodo) => {
        if (!todos.some(todo => todo.id === newTodo.id)) {
            setTodos([...todos, newTodo]);
        } else {
            alert("Todo item already exists!");
        }
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleEditTodo = (id, newTitle) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo)));
    };

    const handleSearchTodos = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        if (searchQuery) {
            setTodos(initialTodoItems.filter(todo => todo.title.toLowerCase().includes(searchQuery)));
        } else {
            setTodos(initialTodoItems);
        }
    };

    const handleCheckTodo = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    }

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
            {todos.map(todo => (
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
            <AddTodo onAdd={handleAddTodo} />
        </>
    );
}
