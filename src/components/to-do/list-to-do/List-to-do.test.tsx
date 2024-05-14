import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ListToDo from "./List-to-do.tsx";

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: jest.fn().mockImplementation(({icon, className, onClick}) => (
        <span className={className} onClick={onClick}>
            {icon.iconName}
        </span>
    )),
}));

test('Delete Button Click', async () => {

    render(<ListToDo/>);

    const initialListSize = screen.getAllByRole('listitem').length;

    const deleteButton = screen.getAllByText('trash-can')[0];
    await fireEvent.click(deleteButton);

    await waitFor(() => expect(screen.queryByText('Read books')).not.toBeInTheDocument());

    const updatedListSize = screen.getAllByRole('listitem').length;

    expect(updatedListSize).toEqual(initialListSize - 1);
});
