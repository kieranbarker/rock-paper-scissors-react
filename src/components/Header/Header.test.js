import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders logo and score', () => {
  render(<Header />);

  const logo = screen.getByAltText(/rock paper scissors/i);
  expect(logo).toBeInTheDocument();

  const score = screen.getByText(/score/i);
  expect(score).toBeInTheDocument();
});
