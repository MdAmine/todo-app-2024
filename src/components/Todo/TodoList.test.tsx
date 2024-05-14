import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { TodoList } from './TodoList';
import { todoItems as initialTodoItems } from '../../Utils.tsx';


describe('Testing App Component', () => {

  afterEach(cleanup);

  it('should check a todo item', async () => {
    render(<TodoList />);
    
    const firstTodoCheck = screen.getAllByTitle('check')[0];
    expect(screen.getAllByTitle('check').length).toBe(3)
    expect(screen.getAllByTitle('unCheck').length).toBe(1)

    await fireEvent.click(firstTodoCheck);
    
    expect(screen.getAllByTitle('check').length).toBe(2)
    expect(screen.getAllByTitle('unCheck').length).toBe(2)
  });

  it('should unCheck a todo item', async () => {
    render(<TodoList />);

    const firstTodoCheckbox = screen.getAllByTitle('unCheck')[0];
    expect(screen.getAllByTitle('check').length).toBe(3)
    expect(screen.getAllByTitle('unCheck').length).toBe(1)

    await fireEvent.click(firstTodoCheckbox);

    expect(screen.getAllByTitle('check').length).toBe(4)
    expect(screen.queryByTitle('unCheck')).not.toBeInTheDocument()
  });


  it('should delete a todo item',async () => {
    render(<TodoList />);

    const firstTodoDeleteButton = screen.getAllByTitle('delete')[0];

    await fireEvent.click(firstTodoDeleteButton);

    expect(screen.queryByText(initialTodoItems[0].title)).not.toBeInTheDocument();
  });

});
