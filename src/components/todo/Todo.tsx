import TodoAdd from "./TodoAdd.tsx";
import "./todo.css";
import TodoItem from "./TodoItem.tsx";
import initialTodoItems, {generateId} from "../Utils.tsx";
import {useState} from "react";

const Todo = () => {

    const [todoItems, setTodoItems] = useState(initialTodoItems);

    const deleteItem = (id) => {
        const newItems = todoItems.filter((item) => item.id !== id);
        setTodoItems(newItems);
    }
    const editItem = (id) => {
        const newTitle = prompt("Edit item");
        if (newTitle) {
            setTodoItems(prevItems =>
                prevItems.map(item =>
                    item.id === id ? {...item, title: newTitle} : item
                )
            );
        }
    }

    const todoItemsMap = todoItems.map((item) => {
        return (
            <TodoItem key={item.id} item={item} onDeleteItem={deleteItem} editItem={editItem}/>
        );
    })
    const addTodoItem = (title) => {
        setTodoItems(prevItems => [
            ...prevItems,
            {id: generateId(), title: title, completed: false}
        ]);
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
                />
            </header>
            {todoItemsMap}
            <TodoAdd onAdd={addTodoItem}/>

        </>
    );
};

export default Todo;
