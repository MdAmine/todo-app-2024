import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailToDo = ({ todoItems }) => {
  const { id } = useParams();
  const todo = todoItems.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();
  if (!todo) {
    return <div>Todo not found!</div>;
  }
  const handleReturn = () => {
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="text-center">
        <h1 className="text-white">ID: {todo.id}</h1>
        <h2 className="text-white">TODO: {todo.todo}</h2>
        <p className="text-white">Completed: {todo.complete ? "Yes" : "No"}</p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailToDo;
