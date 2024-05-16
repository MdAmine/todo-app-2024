import App from './App';
import {getAllByText, getByText, render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

test('renders ListToDo and FloatingButton when logged in', () => {
    localStorage.setItem("isLoggedIn", "true");
    const {container} = render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
    const todoListText = getAllByText(container, 'Todo List')[0];
    expect(todoListText).toBeInTheDocument();
    localStorage.removeItem("isLoggedIn");
});
test('renders login form when not logged in', () => {
    const {container} = render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
    const loginText = getByText(container, 'Login Form');
    expect(loginText).toBeInTheDocument();
});