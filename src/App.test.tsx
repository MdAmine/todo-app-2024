import { render, screen } from "@testing-library/react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

test("should render \"Login\"", () => {
    render(<App />);
    expect(screen.queryByText("Login")).toBeInTheDocument();
});

test('full app rendering/navigating', async () => {
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()
  
    expect(screen.getByText(/Login Form/i)).toBeInTheDocument()
  
    await user.click(screen.getByText(/Login/i))
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument()
  })
  