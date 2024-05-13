import {FormEvent, useRef} from "react";
import {Todo} from "../../types";

function AddTodoForm({onAddTodo}: { onAddTodo: (todo: Todo) => void }) {
  const input = useRef<HTMLInputElement | null>(null)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onAddTodo({
      id: 0,
      name: input.current!.value,
      completed: false
    })
    input.current!.value = ''
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