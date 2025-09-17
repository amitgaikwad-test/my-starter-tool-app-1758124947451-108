import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders React App heading', () => {
  render(<App />);
  const heading = screen.getByText(/React App/i);
  expect(heading).toBeInTheDocument();
});