import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NewsTracker header', () => {
  render(<App />);
  const headerElement = screen.getByText(/NewsTracker/i);
  expect(headerElement).toBeInTheDocument();
});