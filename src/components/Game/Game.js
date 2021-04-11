import PropTypes from 'prop-types';
import icons from '../../icons';
import './Game.css';

function Game({ choices, setUser }) {
  const handleClick = event => {
    const button = event.target.closest('button');
    setUser(button.dataset.id);
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
  choices: PropTypes.array.isRequired,
  setUser: PropTypes.func
};

export default Game;
