import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ListToDo from "./List-to-do.tsx";
import {BrowserRouter} from "react-router-dom";

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: jest.fn().mockImplementation(({icon, className, onClick}) => (
        <span className={className} onClick={onClick}>
            {icon.iconName}
        </span>
    )),
}));

test('Delete Button Click', async () => {
    const items = [{id: 273871, name: "ok", completed: false, priority: "All"},
        {id: 273872, name: "task", completed: false, priority: "All"}];
    localStorage.setItem("todoItems", JSON.stringify(items));

    render(
        <BrowserRouter>
            <ListToDo/>
        </BrowserRouter>
    );

    const initialListSize = screen.getAllByRole('listitem').length;

    const deleteButton = screen.getAllByText('trash-can')[0];
    await fireEvent.click(deleteButton);

    await waitFor(() => expect(screen.queryByText('ok')).not.toBeInTheDocument());

    const updatedListSize = screen.getAllByRole('listitem').length;

    const updatedItems = JSON.parse(localStorage.getItem('todoItems')) || [];

    const isItemDeleted = !updatedItems.some(item => item.name === 'ok');

    expect(isItemDeleted).toBe(true);
    expect(updatedListSize).toEqual(initialListSize - 1);
});
