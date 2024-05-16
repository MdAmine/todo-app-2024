import {render, fireEvent, waitFor} from "@testing-library/react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import '@testing-library/jest-dom';
import {screen} from "@testing-library/react";
import TodoList from "./TodoList";
import {AuthProvider} from "../AuthContext/AuthContext";
import About from "../CallApi/About";
import fetchMock from 'jest-fetch-mock';
import {BrowserRouter} from "react-router-dom";


describe('About Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('fetches GitHub data correctly', async () => {
        const mockResponse = {
            avatar_url: 'https://example.com/avatar.png',
            login: 'goldenadnane',
            public_repos: 16,
            followers: 1,
            following: 3,
            html_url: 'https://github.com/goldenadnane'
        };
        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        render(
            <BrowserRouter>
                <AuthProvider>
                    <About/>
                </AuthProvider>
            </BrowserRouter>
        );

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledWith('https://api.github.com/users/goldenadnane');
        });

        expect(screen.getByText('Username: goldenadnane')).toBeInTheDocument();
        expect(screen.getByText('Nombre de repos: 16')).toBeInTheDocument();
        expect(screen.getByText('Followers: 1')).toBeInTheDocument();
        expect(screen.getByText('Following: 3')).toBeInTheDocument();
        expect(screen.getByText('URL:')).toBeInTheDocument();
        expect(screen.getByText('Return to previous page')).toBeInTheDocument();
    });
});
describe('TodoList Component', () => {
    it('renders todo list correctly', () => {
        render(<TodoList/>);
        expect(screen.getByPlaceholderText('Search todos')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'All'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'P1'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'P2'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'P3'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'P4'})).toBeInTheDocument();
    });
});

describe("TodoItem Component", () => {
    it("calls onDelete when delete button is clicked", () => {
        const onDeleteMock = jest.fn();

        const {getByTestId} = render(
            <TodoItem
                id="1"
                title="Test Todo"
                priority="P1"
                onDelete={onDeleteMock}
                onUpdate={() => {
                }}
            />
        );

        const deleteButton = getByTestId("delete-icon");
        fireEvent.click(deleteButton);
        expect(onDeleteMock).toHaveBeenCalled();
    });
});


describe('AddTodo Component', () => {
    it('renders the add todo form', () => {
        render(<AddTodo onAddTodo={jest.fn()}/>);
        expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
    });

    it('handles input changes', () => {
        render(<AddTodo onAddTodo={jest.fn()}/>);
        const todoInput = screen.getByPlaceholderText('Add a new todo');
        fireEvent.change(todoInput, {target: {value: 'Test Todo'}});
        expect(todoInput).toHaveValue('Test Todo');
    });

    it('calls onAddTodo when Add button is clicked with valid input', () => {
        const onAddTodoMock = jest.fn();
        render(<AddTodo onAddTodo={onAddTodoMock}/>);
        const todoInput = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByRole('button', {name: /add/i});
        fireEvent.change(todoInput, {target: {value: 'Test Todo'}});
        fireEvent.click(addButton);
        expect(onAddTodoMock).toHaveBeenCalledWith('Test Todo');
    });

    describe('TodoItem Component', () => {
        const mockTodo = {
            id: '1',
            title: 'Test Todo',
            priority: 'P3',
            onDelete: jest.fn(),
            onUpdate: jest.fn(),
        };

        it('renders todo item correctly', () => {
            render(<TodoItem {...mockTodo} />);
            expect(screen.getByText('Test Todo')).toBeInTheDocument();
            expect(screen.getByText('P3')).toBeInTheDocument();
        });

        it('updates todo item title', () => {
            render(<TodoItem {...mockTodo} />);
            jest.spyOn(window, 'prompt').mockImplementationOnce(() => 'Updated Todo');
            const updateButton = screen.getByLabelText('Update Todo');
            fireEvent.click(updateButton);
            expect(window.prompt).toHaveBeenCalledWith('Enter new value:', 'Test Todo');
            expect(mockTodo.onUpdate).toHaveBeenCalledWith('1', 'Updated Todo');
        });
    });

});