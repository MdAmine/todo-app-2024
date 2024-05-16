import {render, fireEvent, waitFor} from '@testing-library/react';
import {TodoItem} from './TodoItem';

describe('TodoItem', () => {
    const mockTodo = {
        id: 1,
        title: 'Test Todo',
        completed: false
    };

    it('renders the todo title', () => {
        const {getByText} = render(<TodoItem  key={mockTodo.id} todo={mockTodo} onDeleted={() => {
        }} onCompleted={() => {
        }} onEdit={() => {
        }}/>);
        expect(getByText('Test Todo')).toBeInTheDocument();
    });

    it('calls onDeleted when the delete icon is clicked', () => {
        const mockOnDeleted = jest.fn();
        const {getByTestId} = render(<TodoItem todo={mockTodo} onDeleted={mockOnDeleted} onCompleted={() => {
        }} onEdit={() => {
        }} key={mockTodo.id}/>);
        fireEvent.click(getByTestId('delete-icon'));
        expect(mockOnDeleted).toHaveBeenCalledWith(mockTodo.id);
    });

    it('calls onCompleted when the complete icon is clicked', () => {
        const mockOnCompleted = jest.fn();
        const {getByTestId} = render(<TodoItem todo={mockTodo} onDeleted={() => {
        }} key={mockTodo.id} onCompleted={mockOnCompleted} onEdit={() => {
        }}/>);
        fireEvent.click(getByTestId('completed-icon'));
        expect(mockOnCompleted).toHaveBeenCalledWith(mockTodo.id);
    });

    it('calls onEdit when the edit icon is clicked', async () => {
        window.prompt = jest.fn().mockReturnValue('New Title');
        const mockOnEdit = jest.fn();
        const {getByTestId} = render(<TodoItem todo={mockTodo} onDeleted={() => {
        }} key={mockTodo.id} onCompleted={() => {
        }} onEdit={mockOnEdit}/>);
        fireEvent.click(getByTestId('edit-icon'));
        await waitFor(() => expect(mockOnEdit).toHaveBeenCalledWith({...mockTodo, title: 'New Title'}));
    });
});