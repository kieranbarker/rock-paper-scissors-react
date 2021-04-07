import React from 'react';

function Results({ user, computer, result, reset }) {
  let heading;

  if (result === 'win') {
    heading = <h2>You Win</h2>;
  } else if (result === 'lose') {
    heading = <h2>You Lose</h2>;
  } else if (result === 'draw') {
    heading = <h2>Draw</h2>;
  }

  return (
    <div className="Results">
      {heading}
      <p>You picked: <b>{user}</b></p>
      <p>Computer picked: <b>{computer}</b></p>
      <button type="button" onClick={reset}>New Game</button>
    </div>
  );
}

export default Results;
