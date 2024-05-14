const TodoDetails = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.complete ? "Completed" : "Not completed"}</p>
    </div>
  );
};

export default TodoDetails;
