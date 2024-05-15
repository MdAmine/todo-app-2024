import {render, screen} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders Login component when not logged in', () => {
        localStorage.setItem('isLogged', 'false');
        render(<App/>);
        expect(screen.getByRole('heading', {name: /login form/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
    });

    test('renders ListTodo component when logged in', () => {
        localStorage.setItem('isLogged', 'true');
        render(<App/>);
        expect(screen.getByRole('heading', {name: /todo list/i})).toBeInTheDocument();
    });
});