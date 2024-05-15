

import TodoItem from './TodoItem';
import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';


describe('TodoItem component', () => {
  const item = {
    id: 1,
    todo: 'Test Todo',
    completed: false,
  };

  test('renders todo item correctly', () => {
    const { getByText, container } = render(
      <TodoItem
        item={item}
        onCheck={() => {}}
        onUpdate={() => {}}
        onDelete={() => {}}
      />
    );
    expect(getByText('Test Todo')).toBeInTheDocument();
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBe(3); 
  });
  test('calls onCheck prop when clicked', () => {
    const mockOnCheck = jest.fn();
    const itemId = '1';
  
    const { container } = render(
      <TodoItem
        item={{ id: itemId, todo: 'Test Todo', completed: false }}
        onCheck={mockOnCheck}
        onUpdate={() => {}}
        onDelete={() => {}}
      />
    );
  
    const icon = container.querySelector('svg');
    if (icon) {
      fireEvent.click(icon);
      expect(mockOnCheck).toHaveBeenCalledWith(itemId);
    } else {
      throw new Error('Icon not found');
    }
  });
});
