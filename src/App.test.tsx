import { render } from '@testing-library/react';
import App from './App';


describe('App', () => {
    test('renders login component when not logged in', () => {
        const { getAllByText } = render(<App />);
        getAllByText(/login/i).forEach(item => {
            expect(item).toBeInTheDocument();
        });
    });

    test('renders todo component when logged in', () => {
        localStorage.setItem('isLoggedIn', 'true');
        const { getAllByText } = render(<App />);
        getAllByText(/todo/i).forEach(item => {
            expect(item).toBeInTheDocument();
        });
    });
});