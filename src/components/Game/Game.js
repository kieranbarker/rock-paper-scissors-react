import rock from '../../images/rock.svg';
import paper from '../../images/paper.svg';
import scissors from '../../images/scissors.svg';
import './Game.css';

// could pass down Object.keys(rules) as choices prop?

function Game({ decideGame }) {
  const handleClick = event => {
    const button = event.target.closest('button');
    decideGame(button.dataset.id);
  };

  return (
    <div className="game">
      <button
        className="game__button game__button--paper"
        type="button"
        data-id="paper"
        onClick={handleClick}
      >
        <img src={paper} alt="Paper" />
      </button>
      <button
        className="game__button game__button--scissors"
        type="button"
        data-id="scissors"
        onClick={handleClick}
      >
        <img src={scissors} alt="Scissors" />
      </button>
      <button
        className="game__button game__button--rock"
        type="button"
        data-id="rock"
        onClick={handleClick}
      >
        <img src={rock} alt="Rock" />
      </button>
    </div>
  );
}

export default Game;
