import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should render login component", () => {
    jest.spyOn(window.localStorage.__proto__, "getItem").mockReturnValue("false");
    render(<App />);
    expect(screen.queryByText("Login Form")).toBeInTheDocument();
  });

  test("should render todo component", () => {
    jest.spyOn(window.localStorage.__proto__, "getItem").mockReturnValue("true");
    render(<App />);
    expect(screen.queryByText("Login Form")).not.toBeInTheDocument();
  });
});
