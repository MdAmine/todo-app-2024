import {render} from '@testing-library/react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faPenToSquare, faTimes, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import TodoItem from './TodoItem.tsx';

library.add(faCheck, faPenToSquare, faTimes, faTrashAlt);

test('should not have isChecked state when the check icon is not clicked', () => {
    const mockItem = { title: 'Test Item', id: '1' };
    const mockEditItem = jest.fn();
    const mockDeleteItem = jest.fn();

    const { container } = render(
        <TodoItem item={mockItem} editItem={mockEditItem} onDeleteItem={mockDeleteItem} />
    );

    // Check if the item does not have the 'bg-success' class
    expect(container.querySelector('li')).not.toHaveClass('bg-success');
});
