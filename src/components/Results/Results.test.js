import { render, screen } from '@testing-library/react';
import Results from './Results';

test('renders win', () => {
  render(<Results user="rock" computer="scissors" result="win" />);

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent('You Win');

  const user = screen.getByTestId('user');
  const rock = screen.getByAltText(/rock/i);
  expect(user).toContainElement(rock);

  const computer = screen.getByTestId('computer');
  const scissors = screen.getByAltText(/scissors/i);
  expect(computer).toContainElement(scissors);
});

test('renders loss', () => {
  render(<Results user="paper" computer="scissors" result="lose" />);

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent('You Lose');

  const user = screen.getByTestId('user');
  const paper = screen.getByAltText(/paper/i);
  expect(user).toContainElement(paper);

  const computer = screen.getByTestId('computer');
  const scissors = screen.getByAltText(/scissors/i);
  expect(computer).toContainElement(scissors);
});

test('renders draw', () => {
  render(<Results user="paper" computer="paper" result="draw" />);

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent('Draw');

  const paperIcons = screen.getAllByAltText(/paper/i);
  expect(paperIcons.length).toBe(2);

  const [firstIcon, secondIcon] = paperIcons;

  const user = screen.getByTestId('user');
  expect(user).toContainElement(firstIcon);

  const computer = screen.getByTestId('computer');
  expect(computer).toContainElement(secondIcon);
});
