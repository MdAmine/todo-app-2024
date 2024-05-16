import {Todo} from "./todo.ts";

export interface TodoItemProps {
    todo: Todo;
    key: number;
    onDeleted: (id: number) => void;
    onCompleted: (id: number) => void;
    onEdit: (todo: Todo) => void;
}