import { render, screen } from '@testing-library/react';
import App from './App';

test('renders `Navbar with text` link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Navbar with text/i);
  expect(linkElement).toBeInTheDocument();
});
