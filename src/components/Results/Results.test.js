import { render, screen } from '@testing-library/react';
import Results from './Results';

test('renders win', () => {
  render(<Results user="rock" computer="scissors" score={0} />);
  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent(/you win/i);
});

test('renders loss', () => {
  render(<Results user="scissors" computer="rock" score={0} />);
  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent(/you lose/i);
});

test('renders draw', () => {
  render(<Results user="paper" computer="paper" score={0} />);
  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent(/draw/i);
});
