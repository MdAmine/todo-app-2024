import {FormEvent, useRef} from "react";
import {Todo} from "../../types/todo.ts";
import {Priority} from "../../types/priority.ts";

interface TodoAddProps {
    onAdd: (todo: Todo) => void
    priority: Priority
}

export const TodoAdd = (props: TodoAddProps) => {

    const input = useRef<HTMLInputElement | null>(null)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        props.onAdd({
            id: Math.floor(Math.random() * 1001),
            title: input.current!.value,
            completed: false,
            priority: props.priority
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