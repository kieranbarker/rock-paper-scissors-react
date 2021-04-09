import React from 'react';
import icons from '../../icons';
import './Results.css';

function Results({ user, computer, result, reset }) {
  let heading;

  if (result === 'win') {
    heading = <h2 className="results__heading">You Win</h2>;
  } else if (result === 'lose') {
    heading = <h2 className="results__heading">You Lose</h2>;
  } else if (result === 'draw') {
    heading = <h2 className="results__heading">Draw</h2>;
  }

  return (
    <div className="results">
      {heading}
      <div className="choices">
        <div className="choice">
          <h3 className="choice__heading">You picked</h3>
          <div className={`choice__image choice__image--${user}`}>
            <img src={icons[user]} alt={user} />
          </div>
        </div>
        <div className="choice">
          <h3 className="choice__heading">Computer picked</h3>
          <div className={`choice__image choice__image--${computer}`}>
            <img src={icons[computer]} alt={computer} />
          </div>
        </div>
      </div>
      <button className="play-again" type="button" onClick={reset}>
        Play Again
      </button>
    </div>
  );
}

export default Results;
