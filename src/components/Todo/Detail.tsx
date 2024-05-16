import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.scss"; 

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
    <div className="detail-container">
      <h1 >Todo details</h1>
      <h1 className="detail-title">ID: {task.id}</h1>
      <h2 className="detail-title">Title: {task.title}</h2>
      <h3 className="detail-info">Priority: {task.priority}</h3>
      <Link to={`/`} className="back-link">
        <button type="button">Retour</button>
      </Link>
    </div>
  );
}

export default Detail;
