import { render, screen } from '@testing-library/react';
import Results from './Results';

describe('wins', () => {
  test('rock beats scissors', () => {
    render(<Results user="rock" computer="scissors" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/you win/i);
  });
  
  test('paper beats rock', () => {
    render(<Results user="paper" computer="rock" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/you win/i);
  });
  
  test('scissors beats paper', () => {
    render(<Results user="scissors" computer="paper" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/you win/i);
  });
});

describe('losses', () => {
  test('scissors loses to rock', () => {
    render(<Results user="scissors" computer="rock" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/you lose/i);
  });

  test('rock loses to paper', () => {
    render(<Results user="rock" computer="paper" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/you lose/i);
  });

  test('paper loses to scissors', () => {
    render(<Results user="paper" computer="scissors" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/you lose/i);
  });
});

describe('draws', () => {
  test('rock draws with rock', () => {
    render(<Results user="rock" computer="rock" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/draw/i);
  });

  test('paper draws with paper', () => {
    render(<Results user="paper" computer="paper" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/draw/i);
  });

  test('scissors draws with scissors', () => {
    render(<Results user="scissors" computer="scissors" score={0} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/draw/i);
  });
});
