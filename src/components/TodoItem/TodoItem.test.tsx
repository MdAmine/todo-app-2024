import {beforeEach, describe, expect, it, vi} from 'vitest'
import {render} from '@testing-library/react'
import TodoItem from "./TodoItem.tsx";
import {Todo} from "../../types";
import userEvent from '@testing-library/user-event'

describe('Todo Item test', () => {
  const todo: Todo = {
    id: 1,
    name: 'Hello',
    completed: false
  }
  const onTodoDelete = vi.fn();
  const onTodoUpdate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks()
  });

  it('should display todo name', () => {
    const rendered = render(<TodoItem todo={todo} onDelete={onTodoDelete} onUpdate={onTodoUpdate}/>)

    expect(rendered.getByText(todo.name)).toBeInTheDocument()
  })

  it('should allow user to check todo', async () => {
    const rendered = render(<TodoItem todo={todo} onDelete={onTodoDelete} onUpdate={onTodoUpdate}/>)
    const user = userEvent.setup()
    const checkBtn = rendered.getByLabelText('check-btn')

    await user.click(checkBtn)

    expect(onTodoUpdate).toHaveBeenCalledWith({
      ...todo,
      completed: true,
    })
  })

  it('should allow user to delete todo', async () => {
    const rendered = render(<TodoItem todo={todo} onDelete={onTodoDelete} onUpdate={onTodoUpdate}/>)
    const user = userEvent.setup()
    const deleteBtn = rendered.getByLabelText('delete-btn')

    await user.click(deleteBtn)

    expect(onTodoDelete).toHaveBeenCalledWith(todo.id)
  })

  it('should allow user to update todo', async () => {
    const newTodoName = 'new name'
    vi.spyOn(window, 'prompt').mockReturnValue(newTodoName)
    const rendered = render(<TodoItem todo={todo} onDelete={onTodoDelete} onUpdate={onTodoUpdate}/>)
    const user = userEvent.setup()
    const updateBtn = rendered.getByLabelText('update-btn')

    await user.click(updateBtn)

    expect(onTodoUpdate).toHaveBeenCalledWith({
      ...todo,
      name: newTodoName,
    })
  })
})