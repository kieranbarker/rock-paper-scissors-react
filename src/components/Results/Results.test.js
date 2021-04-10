import { render, screen } from '@testing-library/react';
import Results from './Results';

test('renders win/lose/draw results', () => {
  // WIN

  const { rerender } = render(
    <Results user="rock" computer="scissors" result="win" />
  );

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toHaveTextContent('You Win');

  const user = screen.getByTestId('user');
  expect(user).toContainElement(screen.getByAltText(/rock/i));

  const computer = screen.getByTestId('computer');
  expect(computer).toContainElement(screen.getByAltText(/scissors/i));

  // LOSE

  rerender(<Results user="scissors" computer="rock" result="lose" />);

  expect(heading).toHaveTextContent('You Lose');
  expect(user).toContainElement(screen.getByAltText(/scissors/i));
  expect(computer).toContainElement(screen.getByAltText(/rock/i));

  // DRAW

  rerender(<Results user="paper" computer="paper" result="draw" />);

  expect(heading).toHaveTextContent('Draw');

  const paperIcons = screen.getAllByAltText(/paper/i);
  expect(paperIcons.length).toBe(2);

  const [firstIcon, secondIcon] = paperIcons;
  expect(user).toContainElement(firstIcon);
  expect(computer).toContainElement(secondIcon);

});