import React from "react";
import { Todo } from "../../types/todo";

interface TodoDetailsProps {
  todo: Todo;
}

const TodoDetails: React.FC<TodoDetailsProps> = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.complete ? "Completed" : "Not completed"}</p>
    </div>
  );
};

export default TodoDetails;
