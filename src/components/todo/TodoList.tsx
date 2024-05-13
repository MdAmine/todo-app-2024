import React from "react";
import { initTodos, Todo } from "../../types/todo";
import AddTodoForm from "./AddTodoForm";
import SearchTodo from "./SearchTodo";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>(initTodos);

  const onAddTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  const onDeleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCompleteTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <>
      <SearchTodo />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDeleteTodo}
          onComplete={onCompleteTodo}
        />
      ))}
      <AddTodoForm onAdd={onAddTodo} />
    </>
  );
};

export default TodoList;
