import "bootstrap/dist/css/bootstrap.css";
import "./Todo.css";
import TodoAdd from "./TodoAdd/TodoAdd";
import TodoItem from "./TodoItem/TodoItem";
import  initTodoItems, { generateId } from "../../Utils";
import { useState } from "react";


function Todo() {
const[TodoItems,setTodoItems]= useState(initTodoItems);
const[searchValue,setSearchValue]= useState("");
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
const updateItem = (id) => {
  setTodoItems(TodoItems.map(item => item.id === id ? {...item, todo: prompt("edit to do ",item.todo) || item.todo }: item));
}
const searchResult = TodoItems.filter(item=>
  item.todo.toLowerCase().includes(searchValue.toLowerCase())
);
const checkItem = (id) => {
  setTodoItems(TodoItems.map(item => item.id === id ? {...item, completed: !item.completed} : item));
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
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
          />
        </header>
        {searchResult.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={deleteItem} onUpdate={updateItem} onCheck={checkItem}/>
      ))}
        <TodoAdd onAdd={handleAdd} />
      </div>
    </>
  );

}
  export default Todo;
