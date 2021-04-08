import logo from '../../images/logo.svg';
import './Header.css';

function Header({ score }) {
  return (
    <header className="header">
      <h1>
        <img className="logo" src={logo} alt="Rock Paper Scissors" />
      </h1>
      <p className="score">
        <span className="score__heading">Score</span>
        <span className="score__number">{score}</span>
      </p>
    </header>
  );
}

export default Header;
