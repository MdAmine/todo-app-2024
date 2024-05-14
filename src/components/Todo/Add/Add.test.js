// Add.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Add from './Add';

test('renders Add component and submits a new todo item', () => {
  const addNewTodoItemMock = jest.fn();

  render(<Add addNewTodoItem={addNewTodoItemMock} />);

  const inputElement = screen.getByLabelText(/Add a new todo:/i);
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  expect(inputElement.value).toBe('New Todo');

  fireEvent.submit(inputElement.closest('form'));

  expect(addNewTodoItemMock).toHaveBeenCalledWith('New Todo');

  expect(inputElement.value).toBe('');
});
