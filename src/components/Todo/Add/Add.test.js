import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Add from './Add';

// Mock de la fonction addNewTodoItem
const mockAddNewTodoItem = jest.fn();

test('adds new todo item on form submission', () => {
  const { getByLabelText, getByTestId } = render(<Add addNewTodoItem={mockAddNewTodoItem} />);

  const inputElement = getByLabelText('Add a new todo:');
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });


  const formElement = getByTestId('add-form'); 
  fireEvent.submit(formElement);

 
  expect(mockAddNewTodoItem).toHaveBeenCalledWith('Test Todo', '');
});
