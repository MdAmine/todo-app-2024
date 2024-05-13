import {TodoItem} from "./TodoItem.tsx";
import {todomocks} from "../../mocks/todomocks.ts";
import React from "react";
import {Todo} from "../../types/todo.ts";
import {TodoAdd} from "./TodoAdd.tsx";

export const Todos = () => {
    const [todos, setTodos] = React.useState<Todo[]>(todomocks);

    const searchTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setTodos(todomocks.filter((todo) => todo.title.includes(e.target.value)));
    }

    const onDeleted = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const onCompleted = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        }));
    }
    const onAdd = (todo: Todo) => {
        setTodos((prev) => [...prev, todo]);
    }

    const onEdit = (todo: Todo) => {
        setTodos(todos.map((t) => {
            if (t.id === todo.id) {
                return todo;
            }
            return t;
        }));
    }

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
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} onDeleted={onDeleted} onCompleted={onCompleted}
                              onEdit={onEdit}/>
                ))}
            </ul>
            <TodoAdd onAdd={onAdd}/>

        </div>
    )
}