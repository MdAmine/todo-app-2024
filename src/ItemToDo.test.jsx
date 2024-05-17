import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ListToDo from '../src/components/TODO/ListToDo/ListToDo';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn().mockImplementation(({ icon, className, onClick }) => (
    <span className={className} onClick={onClick}>
      {icon.iconName}
    </span>
  )),
}));

test('Delete Button Click', async () => {
  render(
    <BrowserRouter> 
      <ListToDo />
    </BrowserRouter>
  );

  const initialListSize = screen.getAllByRole('listitem').length;

  const deleteButton = screen.getAllByText('trash-can')[0];
  await fireEvent.click(deleteButton);

  await waitFor(() => expect(screen.queryByText('Read books')).not.toBeInTheDocument());

  const updatedListSize = screen.getAllByRole('listitem').length;

  expect(updatedListSize).toEqual(initialListSize - 1);
});
