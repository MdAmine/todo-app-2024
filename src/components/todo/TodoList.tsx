import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import TodoItem from "./TodoItem";
import { initTodos } from "../../types/todo";

const TodoList = () => {
  const [todos, setTodos] = useState(initTodos);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    filterAndSearchTodos(searchTerm, filterTerm);
  }, [searchTerm, filterTerm, todos]);

  const filterAndSearchTodos = (searchTerm, filterTerm) => {
    const filteredTodos = todos.filter((todo) => {
      const isSearchMatch = todo.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const isFilterMatch =
        filterTerm === "all" || todo.priority === filterTerm;
      return isSearchMatch && isFilterMatch;
    });

    setFilteredTodos(filteredTodos);
  };

  const onAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const onDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const onCompleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const onEditTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: prompt("edit todo's title", todo.title) || todo.title,
            }
          : todo
      );
      return updatedTodos;
    });
    console.log(todos);
  };

  const onSearchTodo = (keyword) => {
    setSearchTerm(keyword);
  };

  const onFilterTodo = (priority) => {
    setFilterTerm(priority);
  };

  return (
    <>
      <SearchTodo onSearch={onSearchTodo} />
      <FilterTodo onFilter={onFilterTodo} />
      {filteredTodos.length > 0 || todos.length > 0 ? (
        (filteredTodos.length > 0 ? filteredTodos : todos).map((todo) => (
          <TodoItem
            key={todo.id}
            data-testid="todo-item"
            todo={todo}
            onDelete={onDeleteTodo}
            onComplete={onCompleteTodo}
            onEdit={onEditTodo}
          />
        ))
      ) : (
        <h5 className="text-center text-light my-4">No todos found</h5>
      )}
      <AddTodoForm onAdd={onAddTodo} />
    </>
  );
};

export default TodoList;
