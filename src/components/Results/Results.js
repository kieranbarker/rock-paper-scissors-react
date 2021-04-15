import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../icons';
import './Results.css';

function Results({ user, computer, newGame }) {
  /**
   * Decide the outcome of the game
   * @param {String} user The user's choice
   * @param {String} computer The computer's choice
   * @returns {String} The outcome (won/lost/drew)
   */
  const decideGame = (user, computer) => {
    if (user === computer) return 'drew';
    const rules = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
    if (rules[user] === computer) return 'won';
    return 'lost';
  };

  /**
   * Handle click events
   */
  const handleClick = () => {
    newGame(result);
  };

  // Decide the outcome of the game
  const result = decideGame(user, computer);

  return (
    <article className="results">
      <h2 className="results__heading">You {result}</h2>
      <div className="choices">
        <article className="choice">
          <h3 className="choice__heading">You picked</h3>
          <div className={`choice__image choice__image--${user}`}>
            <img src={icons[user]} alt={user} />
          </div>
        </article>
        <article className="choice">
          <h3 className="choice__heading">Computer picked</h3>
          <div className={`choice__image choice__image--${computer}`}>
            <img src={icons[computer]} alt={computer} />
          </div>
        </article>
      </div>
      <button className="play-again" type="button" onClick={handleClick}>
        Play Again
      </button>
    </article>
  );
}

Results.propTypes = {
  user: PropTypes.string.isRequired,
  computer: PropTypes.string.isRequired,
  newGame: PropTypes.func
};

export default Results;
