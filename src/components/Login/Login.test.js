// Login.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

test('sets isLoggedIn to true on successful form submission', () => {
  
  const loggedInMock = jest.fn();

  render(<Login loggedIn={loggedInMock} />);

 
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Enter your Password'), { target: { value: 'password123' } });

  
  fireEvent.click(screen.getByText('Login'));

  expect(loggedInMock).toHaveBeenCalledWith(true);
});
