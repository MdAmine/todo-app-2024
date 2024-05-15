import Login from "./Login.tsx";
import {render, screen} from "@testing-library/react";
test("should render \"Basic Compenent\"", () => {
    render(<Login/>);
    expect(screen.queryByText("Login Form")).toBeInTheDocument();
});
