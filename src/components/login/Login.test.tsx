import Login from "./Login.tsx";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

test("should render \"Basic Compenent\"", () => {
    render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    );
    expect(screen.queryByText("Login Form")).toBeInTheDocument();
});
