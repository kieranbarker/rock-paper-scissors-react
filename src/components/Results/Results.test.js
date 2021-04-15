import { render, screen } from '@testing-library/react';
import Results from './Results';

describe('wins', () => {
  test('rock beats scissors', () => {
    render(<Results user="rock" computer="scissors" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/won/i);
  });
  
  test('paper beats rock', () => {
    render(<Results user="paper" computer="rock" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/won/i);
  });
  
  test('scissors beats paper', () => {
    render(<Results user="scissors" computer="paper" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/won/i);
  });
});

describe('losses', () => {
  test('scissors loses to rock', () => {
    render(<Results user="scissors" computer="rock" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/lost/i);
  });

  test('rock loses to paper', () => {
    render(<Results user="rock" computer="paper" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/lost/i);
  });

  test('paper loses to scissors', () => {
    render(<Results user="paper" computer="scissors" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/lost/i);
  });
});

describe('draws', () => {
  test('rock draws with rock', () => {
    render(<Results user="rock" computer="rock" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/drew/i);
  });

  test('paper draws with paper', () => {
    render(<Results user="paper" computer="paper" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/drew/i);
  });

  test('scissors draws with scissors', () => {
    render(<Results user="scissors" computer="scissors" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/drew/i);
  });
});
