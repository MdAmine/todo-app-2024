import { render, screen } from "@testing-library/react";

import App from "./App";

test("should render \"Login\"", () => {
    render(<App />);
    expect(screen.queryByText("Login")).toBeInTheDocument();
});
  