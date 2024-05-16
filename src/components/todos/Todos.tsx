import {TodoItem} from "./TodoItem.tsx";
import {todomocks} from "../../mocks/todomocks.ts";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Todo} from "../../types/todo.ts";
import {TodoAdd} from "./TodoAdd.tsx";
import {Priority} from "../../types/priority.ts";

const Todos = () => {
    const storedTodos = localStorage.getItem('todos');
    const [todos, setTodos] = useState<Todo[]>(storedTodos ? JSON.parse(storedTodos) : todomocks);
    const [searchTerm, setSearchTerm] = useState('');
    const [priority, setPriority] = useState<Priority>(Priority.ALL)

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

    const filteredTodos = useMemo<Todo[]>(() => {
        if (priority === Priority.ALL) {
            return todos.filter(todo =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            return todos.filter(todo =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                todo.priority === priority
            );
        }
    }, [todos, searchTerm, priority]);

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
            <div className='d-flex justify-content-center mb-3'>
                <div className="btn-group">
                    <button type="button"
                            className={`btn btn-outline-dark ${(priority === Priority.ALL ? 'active' : null)}`}
                            onClick={() => setPriority(Priority.ALL)}>
                        ALL
                    </button>
                    <button type="button"
                            className={`btn btn-outline-danger ${(priority === Priority.P1 ? 'active' : null)}`}
                            onClick={() => setPriority(Priority.P1)}>
                        P1
                    </button>
                    <button type="button"
                            className={`btn btn-outline-warning ${(priority === Priority.P2 ? 'active' : null)}`}
                            onClick={() => setPriority(Priority.P2)}>
                        P2
                    </button>
                    <button type="button"
                            className={`btn btn-outline-info ${(priority === Priority.P3 ? 'active' : null)}`}
                            onClick={() => setPriority(Priority.P3)}>
                        P3
                    </button>
                    <button type="button"
                            className={`btn btn-outline-success ${(priority === Priority.P4 ? 'active' : null)}`}
                            onClick={() => setPriority(Priority.P4)}>
                        P4
                    </button>
                </div>
            </div>
            <ul className="list-group todos mx-auto text-light">
                {filteredTodos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} onDeleted={onDeleted} onCompleted={onCompleted}
                              onEdit={onEdit}/>
                ))}
            </ul>
            <TodoAdd priority={priority} onAdd={onAdd}/>

        </div>
    )
}

export default Todos