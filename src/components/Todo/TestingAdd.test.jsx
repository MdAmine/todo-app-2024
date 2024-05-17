import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoAdd from './TodoAdd';

test('adds new todo item on form submission', () => {
  // Mock de la fonction onAdd
  const mockOnAdd = jest.fn();

  // Rendu du composant TodoAdd avec la fonction mockOnAdd en tant que prop
  const { getByLabelText, getByTestId } = render(<TodoAdd onAdd={mockOnAdd} priority="P1" />);

  const inputElement = getByLabelText('Add a new todo:');

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });

  const formElement = getByTestId('add'); 

  fireEvent.submit(formElement);

  expect(mockOnAdd).toHaveBeenCalledWith('Test Todo', 'P1');
});
