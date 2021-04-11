import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can play the game', async () => {
  render(<App />);

  const [rock] = await screen.findAllByRole('button');
  user.click(rock);

  const playAgain = await screen.findByRole('button');
  user.click(playAgain);

  const choices = await screen.findAllByRole('button');
  expect(choices.length).toBe(3);
});
