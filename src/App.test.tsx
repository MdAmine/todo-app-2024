import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders login page if user is not logged in', () => {
        render(<App/>);
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.queryByTestId('todo-component')).not.toBeInTheDocument();
    });

    test('renders Todo List header', () => {
        render(<App/>);
        const todoListHeaders = screen.getAllByText('Todo List');
        expect(todoListHeaders.length).toBe(1);
    });

    test('logs user in when login button is clicked', () => {
        render(<App/>);
        fireEvent.change(screen.getByPlaceholderText('Email'), {target: {value: 'rrrr'}});
        fireEvent.change(screen.getByPlaceholderText('Enter your Password'), {target: {value: 'rrrr'}});
        fireEvent.click(screen.getByText('Login'));
        expect(localStorage.getItem('isLoggedIn')).toEqual('true');
    });
});
