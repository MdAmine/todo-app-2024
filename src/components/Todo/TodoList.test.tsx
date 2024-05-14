import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { TodoList } from './TodoList';
import { todoItems as initialTodoItems } from '../../Utils.tsx';

describe('TodoList Component', () => {
  beforeEach(() => {
    jest.spyOn(window, 'prompt').mockImplementation(() => 'Updated Todo');
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  const getElementsByTitle = (title) => screen.getAllByTitle(title);

  it('should check a todo item', () => {
    render(<TodoList />);
    
    const firstTodoCheck = getElementsByTitle('check')[0];
    expect(getElementsByTitle('check').length).toBe(3);
    expect(getElementsByTitle('unCheck').length).toBe(1);

    fireEvent.click(firstTodoCheck);
    
    expect(getElementsByTitle('check').length).toBe(2);
    expect(getElementsByTitle('unCheck').length).toBe(2);
  });

  it('should uncheck a todo item', () => {
    render(<TodoList />);

    const firstTodoCheckbox = getElementsByTitle('unCheck')[0];
    expect(getElementsByTitle('check').length).toBe(3);
    expect(getElementsByTitle('unCheck').length).toBe(1);

    fireEvent.click(firstTodoCheckbox);

    expect(getElementsByTitle('check').length).toBe(4);
    expect(screen.queryByTitle('unCheck')).not.toBeInTheDocument();
  });

  it('should delete a todo item', () => {
    render(<TodoList />);

    const firstTodoDeleteButton = getElementsByTitle('delete')[0];

    fireEvent.click(firstTodoDeleteButton);

    expect(screen.queryByText(initialTodoItems[0].title)).not.toBeInTheDocument();
  });

  it('should add a new todo item', () => {
    render(<TodoList />);

    const inputField = screen.getByPlaceholderText('Enter your todo');

    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('should edit a todo item', () => {
    render(<TodoList />);

    const firstTodoEditButton = getElementsByTitle('edit')[0];
    fireEvent.click(firstTodoEditButton);

    expect(window.prompt).toHaveBeenCalledWith('Edit todo', initialTodoItems[0].title);

    expect(screen.getByText('Updated Todo')).toBeInTheDocument();
    expect(screen.queryByText(initialTodoItems[0].title)).not.toBeInTheDocument();
  });

  it('should search for todo items', () => {
    render(<TodoList />);

    const searchField = screen.getByPlaceholderText('Search todos');
    fireEvent.change(searchField, { target: { value: initialTodoItems[0].title } });

    expect(screen.getByText(initialTodoItems[0].title)).toBeInTheDocument();
    expect(screen.queryByText(initialTodoItems[1].title)).not.toBeInTheDocument();
  });
});
