import React from "react";
import "./SearchTodo.css";
const searchTodo: React.FC = () => {
  return (
    <header className="text-center text-light my-4">
      <h1 className="mb-5">Todo List</h1>
      <input
        type="text"
        className="form-control m-auto"
        name="search"
        placeholder="search todos"
      />
    </header>
  );
};

export default searchTodo;
