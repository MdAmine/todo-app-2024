import {FormEvent, useRef} from "react";
import {Todo} from "../../types/todo.ts";

export const TodoAdd = ({onAdd}: { onAdd: (todo: Todo) => void }) => {

    const input = useRef<HTMLInputElement | null>(null)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onAdd({
            id: Math.floor(Math.random() * 1001),
            title: input.current!.value,
            completed: false
        })
        input.current!.value = ''
    }
    return (
        <>
            <form className="add text-center my-4" onSubmit={handleSubmit}>
                <label htmlFor="add" className="add text-light">
                    add TODO
                </label>
                <input
                    ref={input}
                    type="text"
                    className="form-control m-auto"
                    name="add-todo"
                    id="add-todo"
                    required
                />
            </form>
        </>
    )
}