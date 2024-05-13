import "bootstrap/dist/css/bootstrap.css";
import "./Todo.css";
import TodoAdd from "./TodoAdd/TodoAdd";
import TodoItem from "./TodoItem/TodoItem";
import  initTodoItems, { generateId } from "../../Utils";
import { useState } from "react";


function Todo() {
const[TodoItems,setTodoItems]= useState(initTodoItems);
const handleAdd=(todo) =>{
  setTodoItems([...TodoItems,{
    id:generateId(),
    todo:todo,
    completed:false
  }]);
}
const deleteItem = (id) => {
  setTodoItems(TodoItems.filter(item => item.id !== id));
}
    return (
    <>
      <div className="container">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
          />
        </header>
        {TodoItems.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={deleteItem}/>
      ))}
        <TodoAdd onAdd={handleAdd} />
      </div>
    </>
  );

}
  export default Todo;
