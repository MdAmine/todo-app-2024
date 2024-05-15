import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoItem from "./TodoItem/TodoItem";
import todoItems, { generatedId } from "../Utils";
import Add from "./Add/Add";
import { useEffect, useState } from "react";

const Todo= () => {
    const [todos, setTodos] = useState(todoItems);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("All");

    function addNewTodoItem(title) {
        const newItem = {
            id: generatedId(),
            todo: title,
            complete: false,
            priority: selectedPriority,
        };
        setTodos(prevTodos => [...prevTodos, newItem]);
        
    }
    function updateTodoItem(id: number, newTitle: any) {
        const updatedTodos = todos.map(item => 
            item.id === id ? { ...item, todo: newTitle } : item
        );
        setTodos(updatedTodos);
    };
    function deleteTodoItem(id: number) {
        const updatedTodos = todos.filter(item => item.id !== id);
        setTodos(updatedTodos);
    };
    function handleSearchChange(event) {
        setSearchQuery(event.target.value);
    };

    function updateTodoState(id: number, complete: any) {
        const updatedTodosstatus = todos.map(item => 
            item.id === id ? { ...item, complete: complete} : item
        );
        setTodos(updatedTodosstatus);
    };
    function handlePriorityChange(priority) {
        setSelectedPriority(priority);
    };

    function getDetails(){

    };
    const filteredTodos = todos.filter(item => {
        const matchesQuery = typeof item.todo === "string" && item.todo.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPriority = selectedPriority === "All" || item.priority === selectedPriority;
        return matchesQuery && matchesPriority;
    });
    
    
    return(
        <>
         <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </header>
        <div className="btn-group mb-3 d-flex justify-content-center" role="group">
                <button type="button" className="btn btn-primary w-100" onClick={() => handlePriorityChange("All")}>All</button>
                <button type="button" className="btn btn-secondary w-100" onClick={() => handlePriorityChange("P1")}>P1</button>
                <button type="button" className="btn btn-success w-100" onClick={() => handlePriorityChange("P2")}>P2</button>
                <button type="button" className="btn btn-danger w-100" onClick={() => handlePriorityChange("P3")}>P3</button>
                <button type="button" className="btn btn-warning w-100" onClick={() => handlePriorityChange("P4")}>P4</button>
            </div>
                <ul className="list-group todos mx-auto text-light">
                {filteredTodos.map((item) => (
    <TodoItem
        key={item.id}
        item={item}
        updateTodoItem={updateTodoItem}
        deleteTodoItem={deleteTodoItem}
        updateTodoState={updateTodoState}
        getDetails={getDetails}
    />
))}
            </ul>
            <Add addNewTodoItem={addNewTodoItem} selectedPriority={selectedPriority}/>
            </>  
    )
}
export default  Todo;