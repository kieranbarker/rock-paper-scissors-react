import PropTypes from 'prop-types';
import icons from '../../icons';
import './Game.css';

const choices = ['rock', 'paper', 'scissors'];

function Game({ decideGame }) {
  const handleClick = event => {
    const button = event.target.closest('button');
    decideGame(button.dataset.id);
  };

  return (
    <div className="game">
      {choices.map(choice => (
        <button
          className={`game__button game__button--${choice}`}
          type="button"
          data-id={choice}
          key={choice}
          onClick={handleClick}
        >
          <img src={icons[choice]} alt={choice} />
        </button>
      ))}
    </div>
  );
}

Game.propTypes = {
  decideGame: PropTypes.func
};

export default Game;
