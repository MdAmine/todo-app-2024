import { render, fireEvent } from '@testing-library/react';
import ToDo from './ToDo';

test('renders ToDo component', () => {
  const { getByText, getByPlaceholderText } = render(<ToDo />);
  const headerElement = getByText('Todo List');
  const inputElement = getByPlaceholderText('Search todos');

  expect(headerElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});


test('deletes a todo when delete button is clicked', () => {
  const { getByText, queryByText, getByTestId } = render(<ToDo />);
  const deleteButton = getByTestId('delete-button-1');

  fireEvent.click(deleteButton);

  expect(queryByText('Read Books')).toBeNull();
});

test('filters todos based on search query', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<ToDo />);
  const inputElement = getByPlaceholderText('Search todos');

  fireEvent.change(inputElement, { target: { value: 'Practice' } });

  expect(queryByText('Read Books')).toBeNull();
  expect(queryByText('Clean house')).toBeNull();
  expect(getByText('Practice sport')).toBeInTheDocument();
});
