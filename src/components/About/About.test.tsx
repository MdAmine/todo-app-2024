import { act, render, screen, waitFor } from "@testing-library/react";
import About from "./About";

const mockUserData = {
  login: 'test_login',
  avatar_url: 'avatar',
  html_url: "fakeurl"
};

const fetchMock = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockUserData)
  })
);
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: jest.fn()
  }));
beforeAll(() => {
 
  global.fetch = fetchMock;
 
});

test('renders application and developer info', async () => {
  render(<About />);

  await waitFor(() => {
    expect(screen.getByText(`Login: ${mockUserData.login}`)).toBeInTheDocument();
    expect(screen.getByText(`Github profile: ${mockUserData.html_url}`)).toBeInTheDocument();
    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
  });
});

test('fetches user data from GitHub API', async () => {
  render(<About />);

  await waitFor(() => {
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock).toHaveBeenCalledWith("https://api.github.com/users/wessal2001");
  });
});
