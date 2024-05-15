import { render, screen, waitFor } from "@testing-library/react";
import DevInfo from "./DevInfo";

it('Fetch Github Api', async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => ({
      name: 'karim',
      avatar_url: "https://avatars.githubusercontent.com/u/45210332?v=4",
      html_url: "https://github.com/ELBOUROUMIABDELKARIM",
      bio: 'Software Engineer'
    }),
  });

  render(<DevInfo onLogout={undefined} />);

  await waitFor(() => expect(screen.getByText('karim')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Software Engineer')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Profile:')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByRole('img', { name: 'karim' })).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/45210332?v=4'));
  await waitFor(() => expect(screen.getByRole('link', { name: 'https://github.com/ELBOUROUMIABDELKARIM' })).toHaveAttribute('href', 'https://github.com/ELBOUROUMIABDELKARIM'));
  });
