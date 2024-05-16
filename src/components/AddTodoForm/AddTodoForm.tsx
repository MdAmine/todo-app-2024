import {FormEvent, useRef} from "react";
import {Priority, Todo} from "../../types";

function AddTodoForm({onAddTodo, priority}: {
  onAddTodo: (todo: Todo) => void,
  priority: Priority | null,
}) {
  const input = useRef<HTMLInputElement | null>(null)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (priority) {
      onAddTodo({
        id: 0,
        name: input.current!.value,
        completed: false,
        priority
      })
      input.current!.value = ''
    } else {
      alert('Please select a priority!')
    }
  }

  return (
    <form className="add text-center my-4" onSubmit={handleSubmit}>
      <label htmlFor="add" className="add text-light">
        Add a new todo:
      </label>
      <input
        ref={input}
        type="text"
        className="form-control m-auto"
        name="add"
        id="add"
        required
      />
    </form>
  )
}

export default AddTodoForm