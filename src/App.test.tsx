import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
describe("App", () => {
  test("renders Login component when not logged in", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText("Login Form")).toBeInTheDocument();
  });

  test("renders ListToDo component when logged in", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    userEvent.click(screen.getByText("Login Form"));

    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });
});
