import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Results from '../Results/Results';
import { shuffle } from '../../helpers';

const choices = ['rock', 'paper', 'scissors'];
const storageKey = 'rpsScore';

class App extends React.Component {
  state = {
    user: null,
    computer: shuffle([...choices])[0],
    score: 0
  }

  componentDidMount() {
    let score = localStorage.getItem(storageKey);
    if (!score) return;
    score = parseInt(score, 10);
    this.setState({ score });
  }

  componentDidUpdate() {
    localStorage.setItem(storageKey, this.state.score);
  }

  makeChoice = choice => {
    this.setState({ user: choice });
  }

  newGame = score => {
    this.setState({
      user: null,
      computer: shuffle([...choices])[0],
      score
    });
  }

  render() {
    const { user, computer, score } = this.state;
    let screen;

    if (user) {
      screen = (
        <Results
          user={user}
          computer={computer}
          score={score}
          newGame={this.newGame}
        />
      );
    } else {
      screen = <Game choices={choices} makeChoice={this.makeChoice} />;
    }

    return (
      <div className="app">
        <Header score={score} />
        {screen}
      </div>
    );
  }
}

export default App;
