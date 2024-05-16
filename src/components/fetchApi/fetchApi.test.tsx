import { render, screen, waitFor } from "@testing-library/react";
import FetchApi from "./fetchApi.tsx";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

test("FetchApi fetches data from GitHub and renders the data", async () => {
    const mockData = {
        avatar_url: "https://github.com/yaimadeddine.png",
        name: "yaimadeddine",
        html_url: "https://github.com/yaimadeddine"
    };

    fetch.mockResponseOnce(JSON.stringify(mockData));

    const mockLogout = jest.fn();

    render(<FetchApi logout={mockLogout} />);

    // Wait for the fetch to complete and the component to update
    await waitFor(() => screen.getByText(mockData.name));

    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.html_url)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockData.avatar_url);
});
