import './TodoList.css'
import {AddTodo} from "./AddTodo.tsx";
import {TodoItem} from "./TodoItem.tsx";
import { todoItems } from '../../Utils.tsx';
import { useState } from 'react';

export function TodoList(){

    const [todoItemsHere, setTodoItemsHere] = useState(todoItems);

    const addTodo = (value) => {
        setTodoItemsHere([...todoItemsHere, value]);
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
                />
            </header>
            {todoItemsHere.map((todo)=>{
                return <TodoItem key={todo.id} todo={todo}>{todo.title}</TodoItem>
            })}

            <AddTodo addTodoToList={addTodo}  />
        </>

    );
}