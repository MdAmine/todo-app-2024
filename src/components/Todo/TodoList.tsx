import './TodoList.css'
import {AddTodo} from "./AddTodo.tsx";
import {TodoItem} from "./TodoItem.tsx";
import { todoItems } from '../../Utils.tsx';
import { useState } from 'react';

export function TodoList(){

    const [todoItemsHere, setTodoItemsHere] = useState(todoItems);

    const addTodo = (todo) => {
        if (!todoItemsHere.includes(todo)) {
            setTodoItemsHere([...todoItemsHere, todo]);
        } else {
            alert("Value already exists in todo list!");
        }
    }

    const deleteTodo = (id) =>{
        const newTodoItems = todoItemsHere.filter((todo)=>{
            return todo.id !== id;
        });
        setTodoItemsHere([...newTodoItems]);
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
                return <TodoItem key={todo.id} todo={todo} deleteTodoFromList={deleteTodo}>{todo.title}</TodoItem>
            })}

            <AddTodo addTodoToList={addTodo}  />
        </>

    );
}