import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("should render greeting message", () => {
  
  render(<Login />);
  expect(screen.queryByText('Login Form')).toBeInTheDocument();
});