import React, { useEffect, useState } from "react";
import { initTodos, Todo } from "../../types/todo";
import AddTodoForm from "./AddTodoForm";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterTerm, setFilterTerm] = useState<string>("");

  useEffect(() => {
    filterAndSearchTodos(searchTerm, filterTerm);
  }, [searchTerm, filterTerm, todos]);

  const filterAndSearchTodos = (searchTerm: string, filterTerm: string) => {
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

  const onAddTodo = (todo: Todo): void => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const onDeleteTodo = (id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const onCompleteTodo = (id: string): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const onEditTodo = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos: Todo[] = prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: prompt("edit todo's title", todo.title) || todo.title,
            }
          : todo
      );
      return updatedTodos;
    });
  };

  const onSearchTodo = (keyword: string) => {
    setSearchTerm(keyword);
  };

  const onFilterTodo = (priority: string) => {
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
