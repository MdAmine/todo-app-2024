import { render, screen } from "@testing-library/react";
import Login from "./Login";
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn()
}));
test("should render greeting message", () => {
  
  render(<Login />);
  expect(screen.queryByText('Login Form')).toBeInTheDocument();
});