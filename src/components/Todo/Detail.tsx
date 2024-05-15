import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Detail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/todos/${id}`).then((res) => {
      setTask(res.data);
    });
  }, [id]);

  if (!task) return <div>Loading...</div>;
  return (
    <div>
      <h1>ID: {task.id}</h1>
      <h2>Title: {task.title}</h2>
      <h3>Priority: {task.priority}</h3>
    </div>
  );
}

export default Detail;
