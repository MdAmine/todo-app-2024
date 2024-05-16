import React, { useState } from "react";
import "../../App.css";
import TodoAdd from "./TodoAdd";
import TodoItm from "./TodoItm";

function Todolist() {
    const [todoItems, setTodoItems] = useState([
        {
            id: 1,
            todo: "Faire la lessive",
            priority: "P1",
            completed: false
        },
        {
            id: 2,
            todo: "Faire les courses",
            priority: "P2",
            completed: true
        },
        {
            id: 3,
            todo: "Répondre aux e-mails",
            priority: "P3",
            completed: false
        },
        {
            id: 4,
            todo: "Répondre aux e-mails",
            priority: "P4",
            completed: false
        }
    ]);
    const [searchValue, setSearchValue] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("All");

    const filteredItems = todoItems.filter((item) =>
        (selectedPriority === "All" || item.priority === selectedPriority) &&
        item.todo.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    function updateTodoState(id, completed) {
        const updatedTodosstatus = todoItems.map(item =>
            item.id === id ? { ...item, completed: completed} : item
        );
        setTodoItems(updatedTodosstatus);
    }
  
    const handlePriorityFilter = (priority) => {
        setSelectedPriority(priority);
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

    const handleAddTodo = (newTodo, priority) => {
        const newItem = {
            id: Date.now(), 
            todo: newTodo,
            priority: priority,
            completed: false
        };
        if (selectedPriority === "All") {
            setTodoItems([...todoItems, { ...newItem, priority: "P1" }]);
        }else{
        setTodoItems([...todoItems, newItem]); }
    };
   
    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <div className="d-flex justify-content-center">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="search"
                            placeholder="Search todos"
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Priority Buttons">
                    <button type="button" className="btn btn-dark" onClick={() => handlePriorityFilter("All")}>All</button>
                    <button type="button" className="btn btn-danger" onClick={() => handlePriorityFilter("P1")}>P1</button>
                    <button type="button" className="btn btn-warning" onClick={() => handlePriorityFilter("P2")}>P2</button>
                    <button type="button" className="btn btn-primary" onClick={() => handlePriorityFilter("P3")}>P3</button>
                    <button type="button" className="btn btn-success" onClick={() => handlePriorityFilter("P4")}>P4</button>
                </div>
            </header>
            {filteredItems.map((item) => (
                <TodoItm
                    key={item.id}
                    item={item}
                    onDelete={handleDeleteTodo}
                    onUpdate={(id, newTodo) => handleUpdate(id, newTodo)}
                    updateTodoState={updateTodoState}
                />
            ))}

<TodoAdd onAdd={handleAddTodo} priority={selectedPriority} />
      

        
        </div>


    );
}

export default Todolist;
