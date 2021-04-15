import { render, screen } from '@testing-library/react';
import Game from './Game';

const choices = ['rock', 'paper', 'scissors'];

test('renders rock, paper, and scissors buttons', () => {
  render(<Game choices={choices} />);

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(3);

  choices.forEach((choice, index) => {
    expect(buttons[index]).toHaveAttribute('data-id', choice);
  });
});
