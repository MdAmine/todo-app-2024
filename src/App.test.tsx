import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
    afterEach(() => {
        localStorage.clear();
    });

    test('renders login component when not logged in', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

    test('renders todo component when logged in', () => {
        localStorage.setItem('isLoggedIn', 'true');
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByText(/todo/i)).toBeInTheDocument();
    });
});