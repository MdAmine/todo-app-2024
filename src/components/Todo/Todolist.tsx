import React, { useState } from "react";
import "../../App.css";
import TodoAdd from "./TodoAdd";
import TodoItm from "./TodoItm";

function Todolist({onLogout}) {
    const [todoItems, setTodoItems] = useState([
        {
            id: 1,
            todo: "Faire la lessive",
            completed: false
        },
        {
            id: 2,
            todo: "Faire les courses",
            completed: true
        },
        {
            id: 3,
            todo: "Répondre aux e-mails",
            completed: false
        }
    ]);
    const handleDeleteTodo = (id) => {
        const updatedItems = todoItems.filter(item => item.id !== id);
        setTodoItems(updatedItems);//pose les ids qui sont different de (id)
    };

    // l' ajout
    const handleAddTodo = (newTodo) => {
        const newItem = {
            id: todoItems.length + 1, // Générer un nouvel ID a partir de la longueur de ma lista
            todo: newTodo,
            completed: false
        };
        setTodoItems([...todoItems, newItem]); 
    };

    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <button className="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                />
            </header>
            {/* Affichage des éléments de la liste */}
            {todoItems.map(item => (
            <TodoItm key={item.id} item={item} onDelete={handleDeleteTodo} />
))}

            <TodoAdd onAdd={handleAddTodo} /> {/* Passer la fonction handleAddTodo au composant TodoAdd */}
        </div>
    );
}

export default Todolist;
