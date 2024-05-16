import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoAdd from './TodoAdd';

test('adds new todo item on form submission', () => {
  // Mock de la fonction onAdd
  const mockOnAdd = jest.fn();

  // Rendu du composant TodoAdd avec la fonction mockOnAdd en tant que prop
  const { getByLabelText, getByTestId } = render(<TodoAdd onAdd={mockOnAdd} priority="P1" />);

  // Sélectionner l'élément input pour ajouter un nouveau todo
  const inputElement = getByLabelText('Add a new todo:');

  // Simuler la saisie d'un nouveau todo
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });

  // Sélectionner le formulaire
  const formElement = getByTestId('add'); // Modification ici

  // Soumettre le formulaire
  fireEvent.submit(formElement);

  // Vérifier si la fonction onAdd a été appelée avec les bons arguments
  expect(mockOnAdd).toHaveBeenCalledWith('Test Todo', 'P1');
});
