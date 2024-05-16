import {act, render, screen, waitFor } from "@testing-library/react";
import DeveloperInfo from "./DeveloperInfo";

afterEach(() => {
  jest.resetAllMocks();
});
jest.mock('../../context/AuthContext', () => ({
    useAuth: () => ({
      handleLogout: jest.fn(),
    }),
  }));

it('Fetches and displays GitHub user info correctly', async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      name: 'rahhaoui',
      avatar_url: "url",
      html_url: "https://github.com/Abdessamad-Rahhaoui",
      bio: 'FSSM Software Engineer'
    }),
  });

  render(<DeveloperInfo />);

  await act(async () => 
    await new Promise((resolve)=>setTimeout(resolve, 1000))
);
    expect(screen.getByText(/rahhaoui/)).toBeInTheDocument();
    expect(screen.getByText(/FSSM Software Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/Profile/)).toBeInTheDocument();

});