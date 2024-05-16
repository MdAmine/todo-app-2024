import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from 'react-router-dom';

describe("App Component", () => {
  test("should render login component", () => {
    jest.spyOn(window.localStorage.__proto__, "getItem").mockReturnValue("false");
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.queryByText("Login Form")).toBeInTheDocument();
  });

  test("should render todo component", () => {
    jest.spyOn(window.localStorage.__proto__, "getItem").mockReturnValue("true");
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.queryByText("Login Form")).not.toBeInTheDocument();
  });
});
