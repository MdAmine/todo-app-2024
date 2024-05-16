import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn()
}));

test('calls onCheck prop when clicked', () => {
  const mockOnCheck = jest.fn();
  const item = {
    id: '1',
    todo: 'Test Todo',
    completed: false,
    priority: 'P1'
  };

  const { container } = render(<TodoItem item={item} onCheck={mockOnCheck} onUpdate={() => {}} onDelete={() => {}} onView={() => {}} />);
  
  const icon = container.querySelector('svg');
  if (icon) {
    fireEvent.click(icon);
    expect(mockOnCheck).toHaveBeenCalledWith(item.id);
  } else {
    throw new Error('Icon not found');
  }
});

test('renders todo item correctly', () => {
  const item = {
    id: '1',
    todo: 'Test Todo',
    completed: false,
    priority: 'P1'
  };

  const { getByText } = render(<TodoItem item={item} onCheck={() => {}} onUpdate={() => {}} onDelete={() => {}} onView={() => {}} />);
  const todoElement = getByText(/Test Todo/i);
  expect(todoElement).toBeInTheDocument();
});