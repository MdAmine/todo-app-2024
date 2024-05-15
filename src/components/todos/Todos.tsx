import {TodoItem} from "./TodoItem.tsx";
import {todomocks} from "../../mocks/todomocks.ts";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Todo} from "../../types/todo.ts";
import {TodoAdd} from "./TodoAdd.tsx";

export const Todos = () => {
    const storedTodos = localStorage.getItem('todos');
    const [todos, setTodos] = useState<Todo[]>(storedTodos ? JSON.parse(storedTodos) : todomocks);
    const [searchTerm, setSearchTerm] = useState('');

    const searchTodoHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    }, []);

    const onDeleted = useCallback((id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }, [todos]);

    const onCompleted = useCallback((id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        }));
    }, [todos]);

    const onAdd = useCallback((todo: Todo) => {
        setTodos((prev) => [...prev, todo]);
    }, []);

    const onEdit = useCallback((updatedTodo: Todo) => {
        setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    }, [todos]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filteredTodos = useMemo(() => todos.filter((todo) => todo.title
        .toLowerCase()
        .includes(searchTerm)), [todos, searchTerm]);

    return (
        <div>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    onChange={searchTodoHandler}
                />
            </header>

            <ul className="list-group todos mx-auto text-light">
                {filteredTodos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} onDeleted={onDeleted} onCompleted={onCompleted}
                              onEdit={onEdit}/>
                ))}
            </ul>
            <TodoAdd onAdd={onAdd}/>

        </div>
    )
}