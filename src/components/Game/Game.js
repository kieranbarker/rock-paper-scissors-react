import PropTypes from 'prop-types';
import icons from '../../icons';
import './Game.css';

function Game({ choices, setUser }) {
  /**
   * Handle click events
   * @param {Event} event The Event object
   */
  const handleClick = event => {
    const button = event.target.closest('button');
    setUser(button.dataset.id);
  };

  return (
    <article className="game">
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
    </article>
  );
}

Game.propTypes = {
  choices: PropTypes.array.isRequired,
  setUser: PropTypes.func
};

export default Game;
