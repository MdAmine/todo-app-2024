import { render, fireEvent } from '@testing-library/react';
import AddToDo from './AddToDo';

test('renders AddToDo component', () => {
  const { getByLabelText, getByPlaceholderText } = render(<AddToDo />);
  const labelElement = getByLabelText('Add a new todo:');
  const inputElement = getByPlaceholderText('enter your todo');

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('input value updates correctly', () => {
  const { getByTestId } = render(<AddToDo />);
  const inputElement = getByTestId('todo-input');

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });

  expect(inputElement.value).toBe('New Todo');
});

test('calls add function with correct value when form is submitted', () => {
  const addMock = jest.fn();
  const { getByTestId } = render(<AddToDo add={addMock} />);
  const inputElement = getByTestId('todo-input');
  
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.submit(inputElement);
  
  expect(addMock).toHaveBeenCalledWith('New Todo');
  expect(inputElement.value).toBe('');
});
