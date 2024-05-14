import React from "react";
import { useParams } from "react-router-dom";

function TodoDetail({ todoItems }) {
  const { id } = useParams();

  const todoItem = todoItems.find((item) => item.id === parseInt(id ?? ""));

  return (
    <div>
      <h2>Todo Detail</h2>
      {todoItem ? (
        <div>
          <h3>{todoItem.todo}</h3>
          <p>Complete: {todoItem.complete ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Todo not found</p>
      )}
    </div>
  );
}

export default TodoDetail;
