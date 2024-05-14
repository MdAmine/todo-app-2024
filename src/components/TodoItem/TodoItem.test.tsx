import {beforeEach, describe, expect, it, vi} from 'vitest'
import {render} from '@testing-library/react'
import TodoItem from "./TodoItem.tsx";
import {Todo} from "../../types";

describe('Todo Item test', () => {
  const todo: Todo = {
    id: 1,
    name: 'Hello',
    completed: false
  }
  const onTodoDelete = vi.fn();
  const onTodoUpdate = vi.fn();

  beforeEach(() => {
    onTodoDelete.mockClear();
    onTodoUpdate.mockClear();
  });

  it('should display todo name check todo', () => {
    const rendered = render(<TodoItem todo={todo} onDelete={onTodoDelete} onUpdate={onTodoUpdate}/>)

    expect(rendered.getByText(todo.name)).toBeInTheDocument()
  })
})