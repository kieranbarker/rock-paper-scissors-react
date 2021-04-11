import { render, screen } from '@testing-library/react';
import Game from './Game';

const choices = ['rock', 'paper', 'scissors'];

test('renders rock, paper, and scissors buttons', () => {
  render(<Game choices={choices} />);

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(3);

  const [firstButton, secondButton, thirdButton] = buttons;
  expect(firstButton).toHaveAttribute('data-id', 'rock');
  expect(secondButton).toHaveAttribute('data-id', 'paper');
  expect(thirdButton).toHaveAttribute('data-id', 'scissors');
});
