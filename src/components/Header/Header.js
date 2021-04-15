import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import './Header.css';

function Header({ score }) {
  return (
    <header className="header">
      <h1>
        <img className="logo" src={logo} alt="Rock Paper Scissors" />
      </h1>
      <div className="score">
        <p className="score__heading">Score</p>
        <ul className="score__results">
          {Object.keys(score).map(result => (
            <li key={result}>{result}: {score[result]}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.exact({
    won: PropTypes.number.isRequired,
    lost: PropTypes.number.isRequired,
    drew: PropTypes.number.isRequired
  })
};

export default Header;
