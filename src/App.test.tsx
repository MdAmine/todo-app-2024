import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("renders Login component when not logged in", () => {
    render(
      <BrowserRouter>
        {" "}
        <App />
      </BrowserRouter>
    );
    const loginElement = screen.getByTestId("login");
    expect(loginElement).toBeInTheDocument();
  });

  test("renders ListToDo component when logged in", () => {
    render(
      <BrowserRouter>
        {" "}
        <App />
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const loginElement = screen.getByText("Login Form");
    expect(loginElement).toBeInTheDocument();
  });
});
