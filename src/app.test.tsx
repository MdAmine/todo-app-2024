import {act, fireEvent, render, screen} from "@testing-library/react";
import App from "./App.tsx";
import ItemTodo from "./components/UI/itemTodo.tsx";
import DeveloperInfo from "./components/UI/developerInfo.tsx";


describe('App Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders Login component when not logged in', () => {
        localStorage.setItem('isLogged', 'false');
        render(<App />);
        expect(screen.getByRole('heading', { name: /login form/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('renders ListTodo component when logged in', () => {
        localStorage.setItem('isLogged', 'true');
        render(<App />);
        expect(screen.getByRole('heading', { name: /todo list/i })).toBeInTheDocument();
    });
});

const mockTodo = {
    id: 1,
    title: "Test Todo",
    completed: false
};

const mockOnDelete = jest.fn();
const mockOnEdit = jest.fn();
const mockOnChecked = jest.fn();

describe("todo item action buttons", () => {
    test('calls onDelete when delete button is clicked', () => {
        render(<ItemTodo todo={mockTodo} onDelete={mockOnDelete} onEdit={mockOnEdit} onChecked={mockOnChecked} />);
        const deleteButton = screen.getByLabelText('delete');
        fireEvent.click(deleteButton);
        expect(mockOnDelete).toHaveBeenCalledWith(mockTodo.id);
    });

    test('calls onEdit when edit button is clicked', () => {
        window.prompt = jest.fn().mockImplementation(() => 'Edited Todo');
        render(<ItemTodo todo={mockTodo} onDelete={mockOnDelete} onEdit={mockOnEdit} onChecked={mockOnChecked} />);
        const editButton = screen.getByLabelText('edit');
        fireEvent.click(editButton);
        expect(mockOnEdit).toHaveBeenCalledWith(mockTodo.id, 'Edited Todo');
    });

    test('calls onChecked when check button is clicked', () => {
        render(<ItemTodo todo={mockTodo} onDelete={mockOnDelete} onEdit={mockOnEdit} onChecked={mockOnChecked} />);
        const checkButton = screen.getByLabelText('check');
        fireEvent.click(checkButton);
        expect(mockOnChecked).toHaveBeenCalledWith(mockTodo.id);
    });

    test('calls onChecked when uncheck button is clicked', () => {
        const completedTodo = { ...mockTodo, completed: true };
        render(<ItemTodo todo={completedTodo} onDelete={mockOnDelete} onEdit={mockOnEdit} onChecked={mockOnChecked} />);
        const uncheckButton = screen.getByLabelText('uncheck');
        fireEvent.click(uncheckButton);
        expect(mockOnChecked).toHaveBeenCalledWith(completedTodo.id);
    });
});


test('Fetch Developer Info', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
            name: 'John Doe',
            avatar_url: 'https://example.com/avatar.jpg',
            bio: 'Software Engineer',
            html_url: 'https://github.com/johndoe'
        }),
    });

    render(<DeveloperInfo onLogout={undefined} />);

    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(screen.getByText(/Developer Infos/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
});