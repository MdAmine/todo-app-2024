import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  let store = {};

  const mockLocalStorage = () => {
    const localStorageMock = {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  };

  beforeAll(() => {
    mockLocalStorage();
  });

  beforeEach(() => {
    localStorage.setItem('isLoggedIn', 'false');
  });

  afterEach(() => {
    localStorage.clear();
    cleanup();
  });

  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it('renders App without crashing', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('Login Form')).toBeInTheDocument();
  });

  it('should render Login Form when not logged in', () => {
    renderWithRouter(<App />);
    const loginh1 = screen.getByText('Login Form');
    expect(loginh1).toBeInTheDocument();
  });

  it('should render FloatingButton and TodoList after logging in', async () => {
    localStorage.setItem('isLoggedIn', 'true');
    renderWithRouter(<App />);
    const floatingButton = await screen.findByText('Logout');
    const todoList = await screen.findByPlaceholderText('Search todos');
    expect(floatingButton).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
  });
});
