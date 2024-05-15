import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TodoList } from './TodoList';
import { todoItems as initialTodoItems } from '../../Utils.tsx';

describe('TodoList Component', () => {
  let todosHome;
  let setTodosHome;

  beforeEach(() => {
    todosHome = [...initialTodoItems];
    setTodosHome = jest.fn((newTodos) => {
      todosHome = newTodos;
    });
    jest.spyOn(window, 'prompt').mockImplementation(() => 'Updated Todo');
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  const getElementsByTitle = (title) => screen.getAllByTitle(title);

  const renderTodoList = () => {
    return render(
      <Router>
        <TodoList todosHome={todosHome} setTodosHome={setTodosHome} />
      </Router>
    );
  };

  it('should check a todo item', () => {
    renderTodoList();

    const firstTodoCheck = getElementsByTitle('check')[0];
    expect(getElementsByTitle('check').length).toBe(3);
    expect(getElementsByTitle('unCheck').length).toBe(1);

    fireEvent.click(firstTodoCheck);

    expect(setTodosHome).toHaveBeenCalled();
    expect(getElementsByTitle('check').length).toBe(2);
    expect(getElementsByTitle('unCheck').length).toBe(2);
  });

  it('should uncheck a todo item', () => {
    renderTodoList();

    const firstTodoCheckbox = getElementsByTitle('unCheck')[0];
    expect(getElementsByTitle('check').length).toBe(3);
    expect(getElementsByTitle('unCheck').length).toBe(1);

    fireEvent.click(firstTodoCheckbox);

    expect(setTodosHome).toHaveBeenCalled();

    expect(getElementsByTitle('check').length).toBe(4);
    expect(screen.queryByTitle('unCheck')).not.toBeInTheDocument();
  });

  it('should delete a todo item', () => {
    renderTodoList();

    const firstTodoDeleteButton = getElementsByTitle('delete')[0];

    fireEvent.click(firstTodoDeleteButton);

    expect(setTodosHome).toHaveBeenCalled();
  });

  it('should add a new todo item', () => {
    renderTodoList();

    const inputField = screen.getByPlaceholderText('Enter your todo');

    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });

    expect(setTodosHome).toHaveBeenCalled();
  });

  it('should edit a todo item', () => {
    renderTodoList();

    const firstTodoEditButton = getElementsByTitle('edit')[0];
    fireEvent.click(firstTodoEditButton);

    expect(window.prompt).toHaveBeenCalledWith('Edit todo', initialTodoItems[0].title);
    expect(setTodosHome).toHaveBeenCalled();
  });

  it('should search for todo items', () => {
    renderTodoList();

    const searchField = screen.getByPlaceholderText('Search todos');
    fireEvent.change(searchField, { target: { value: initialTodoItems[0].title } });

    expect(screen.getByText(initialTodoItems[0].title)).toBeInTheDocument();
  });
});
