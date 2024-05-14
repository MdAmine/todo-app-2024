import React, { useState } from "react";
import "../../App.css";
import TodoAdd from "./TodoAdd";
import TodoItm from "./TodoItm";


function Todolist() {
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
    const [searchValue, setSearchValue] = useState("");
    const filteredItems = todoItems.filter((item) =>
        item.todo.toLowerCase().includes(searchValue.toLowerCase())
      );
      const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
      };
            
      
    const handleDeleteTodo = (id) => {
        const updatedItems = todoItems.filter(item => item.id !== id);
        setTodoItems(updatedItems);
    };
  
        const handleUpdate = (id, newTodo) => {
            const updatedItems = todoItems.map(item => {
                if (item.id === id) {
                    return { ...item, todo: newTodo };
                }
                return item;
            });
            setTodoItems(updatedItems);
        };
    
       

    // l' ajout
    const handleAddTodo = (newTodo) => {
        const newItem = {
            id: Date.now(), 
            todo: newTodo,
            completed: false
        };
        setTodoItems([...todoItems, newItem]); 
    };
   
    
    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
        <br />
        <input
              type="text"
              className="form-control m-auto"
              name="search"
              placeholder="search todos"
              value={searchValue}
              onChange={handleSearchChange}
          />

            </header>
            
            {filteredItems.map((item) => (
             <TodoItm
              key={item.id}
             item={item}
             onDelete={handleDeleteTodo}
             onUpdate={(id, newTodo) => handleUpdate(id, newTodo)}
             />
))}


            <TodoAdd onAdd={handleAddTodo} /> 
        </div>
    );
}

export default Todolist;
