import "bootstrap/dist/css/bootstrap.css";

import "./ListToDo.css";
import ItemToDo from "../ItemToDo/ItemToDo";
import AddToDo from "../AddToDo/AddToDo";
import { useState } from "react";
function ListToDo() {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: "Read Books",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Play Games",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Watch Movies",
      complete: false,
    },
  ]);
  const handleAddTodo = (newTodo) => {
    setTodoItems([
      ...todoItems,
      { id: Math.floor(Math.random() * 1000), todo: newTodo, complete: false },
    ]);
  };
  const handleModifyTodo = (id, modifiedTodo) => {
    setTodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, todo: modifiedTodo } : item
      )
    );
  };
  const handleDeleteTodo = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };
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

        {todoItems.map((item) => (
          <ItemToDo
            key={item.id}
            props={item}
            onDelete={handleDeleteTodo}
            onModify={(modifiedTodo) => handleModifyTodo(item.id, modifiedTodo)}
          />
        ))}
      </div>
      <AddToDo onAddTodo={handleAddTodo} />
    </>
  );
}

export default ListToDo;
