import {Priority} from "../../types";
import {Dispatch, SetStateAction} from "react";

function TodoPrioritySearchButton({currentPriority, priority, setPriority}: {
  currentPriority: Priority | null,
  priority: Priority | null
  setPriority: Dispatch<SetStateAction<Priority | null>>
}) {
  switch (priority) {
    case Priority.P1:
      return (
        <button type="button" className={`btn btn-outline-danger ${(currentPriority === Priority.P1 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P1)}>
          P1
        </button>
      )
    case Priority.P2:
      return (
        <button type="button" className={`btn btn-outline-warning ${(currentPriority === Priority.P2 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P2)}>
          P2
        </button>
      )
    case Priority.P3:
      return (
        <button type="button" className={`btn btn-outline-info ${(currentPriority === Priority.P3 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P3)}>
          P3
        </button>
      )
    case Priority.P4:
      return (
        <button type="button" className={`btn btn-outline-success ${(currentPriority === Priority.P4 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P4)}>
          P4
        </button>
      )
    default:
      return (
        <button type="button" className={`btn btn-outline-dark ${(currentPriority === null ? 'active' : null)}`}
                onClick={() => setPriority(null)}>
          ALL
        </button>
      )
  }
}

export default TodoPrioritySearchButton