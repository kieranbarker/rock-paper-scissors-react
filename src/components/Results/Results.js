import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../icons';
import './Results.css';

function Results({ user, computer, score, newGame }) {

  const decideGame = (user, computer) => {
    if (user === computer) return 'draw';
    const rules = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
    if (rules[user] === computer) return 'you win';
    return 'you lose';
  };

  const handleClick = () => {
    let newScore;
    if (result === 'draw') {
      newScore = score;
    } else if (result === 'you win') {
      newScore = score + 1;
    } else if (result === 'you lose') {
      newScore = score - 1;
    }
    newGame(newScore);
  };

  const result = decideGame(user, computer);

  return (
    <div className="results">
      <h2 className="results__heading">{result}</h2>
      <div className="choices">
        <div className="choice" data-testid="user">
          <h3 className="choice__heading">You picked</h3>
          <div className={`choice__image choice__image--${user}`}>
            <img src={icons[user]} alt={user} />
          </div>
        </div>
        <div className="choice" data-testid="computer">
          <h3 className="choice__heading">Computer picked</h3>
          <div className={`choice__image choice__image--${computer}`}>
            <img src={icons[computer]} alt={computer} />
          </div>
        </div>
      </div>
      <button className="play-again" type="button" onClick={handleClick}>
        Play Again
      </button>
    </div>
  );

}

Results.propTypes = {
  user: PropTypes.string.isRequired,
  computer: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  newGame: PropTypes.func
};

export default Results;
