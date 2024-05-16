import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../Login/Login";

describe("Login Component Input Validation", () => {
  it("displays error message for invalid email format", () => {
    const handleLoginMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <Login handleLogin={handleLoginMock} />
    );

    const emailInput = getByPlaceholderText("Email");

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    expect(getByText("Please enter a valid email address")).toBeInTheDocument();
    expect(handleLoginMock).not.toHaveBeenCalled();
  });

  it("displays error message for empty email", () => {
    const handleLoginMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <Login handleLogin={handleLoginMock} />
    );

    const emailInput = getByPlaceholderText("Email");

    fireEvent.change(emailInput, { target: { value: "" } });

    expect(
      getByText("Please enter both email and password")
    ).toBeInTheDocument();
    expect(handleLoginMock).not.toHaveBeenCalled();
  });

  it("displays error message for password shorter than 6 characters", () => {
    const handleLoginMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <Login handleLogin={handleLoginMock} />
    );

    const passwordInput = getByPlaceholderText("Enter your Password");

    fireEvent.change(passwordInput, { target: { value: "pass" } });

    expect(
      getByText("Password must be at least 6 characters long")
    ).toBeInTheDocument();
    expect(handleLoginMock).not.toHaveBeenCalled();
  });

  it("calls handleLogin when inputs are valid", () => {
    const handleLoginMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <Login handleLogin={handleLoginMock} />
    );

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Enter your Password");

    fireEvent.change(emailInput, {
      target: { value: "valid-email@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "valid-password123" } });

    fireEvent.click(getByText("Login"));

    expect(handleLoginMock).toHaveBeenCalledWith(
      "valid-email@example.com",
      "valid-password123"
    );
  });
});
