import { useState } from "react";
import { priorityColors } from "../../types/todo";

const FilterTodo = ({ onFilter }) => {
  const [selectedPriority, setSelectedPriority] = useState("all");

  const handlePriorityChange = (priority) => {
    console.log(priority);
    setSelectedPriority(priority);
    onFilter(priority);
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-2">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        {Object.entries(priorityColors).map(([priority, color]) => (
          <button
            key={priority}
            type="button"
            className={`btn btn-outline-${color} btn-sm ${
              selectedPriority === priority ? "active" : ""
            }`}
            onClick={() => handlePriorityChange(priority)}
          >
            {priority}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTodo;
