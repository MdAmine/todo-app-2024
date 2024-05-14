import React, { useState } from "react";

interface FilterTodoProps {
  onFilter: (priority: string) => void;
}

const FilterTodo: React.FC<FilterTodoProps> = ({ onFilter }) => {
  const [selectedPriority, setSelectedPriority] = useState<string>("all");

  const priorityColors = {
    all: "primary",
    P1: "success",
    P2: "warning",
    P3: "danger",
    P4: "secondary",
  };

  const handlePriorityChange = (priority: string) => {
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
