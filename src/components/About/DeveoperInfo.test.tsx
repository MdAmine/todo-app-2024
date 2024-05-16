import { render, screen, waitFor } from '@testing-library/react';
import DeveloperInfo from './DeveloperInfo';

jest.mock('node-fetch');

test('renders developer info', async () => {
  const mockResponse = {
    id: 1,
    login: 'Marouane-sebti',
    avatar_url: 'https://github.com/Marouane-sebti.png'
  };
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockResponse)
  });

  render(<DeveloperInfo />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('Developer Info')).toBeInTheDocument());
  expect(screen.getByText('ID : 1')).toBeInTheDocument();
  expect(screen.getByText(/Username\s*:\s*Marouane-sebti/i)).toBeInTheDocument();
});
