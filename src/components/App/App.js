import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Results from '../Results/Results';
import { shuffle } from '../../helpers';

const rules = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

const storageKey = 'rpsScore';

class App extends React.Component {
  state = {
    user: null,
    computer: shuffle(Object.keys(rules))[0],
    result: null,
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

  decideGame = user => {
    const { computer, score } = this.state;
    let result, newScore;
  
    if (user === computer) {
      result = 'draw';
      newScore = score;
    } else if (rules[user] === computer) {
      result = 'win';
      newScore = score + 1;
    } else {
      result = 'lose';
      newScore = score - 1;
    }


    this.setState({ user, result, score: newScore });
  }

  reset = () => {
    this.setState({
      user: null,
      computer: shuffle(Object.keys(rules))[0],
      result: null
    });
  }

  render() {
    const { user, computer, result, score } = this.state;
    let screen;

    if (result) {
      screen = (
        <Results
          user={user}
          computer={computer}
          result={result}
          reset={this.reset}
        />
      );
    } else {
      screen = (
        <Game choices={Object.keys(rules)} decideGame={this.decideGame} />
      );
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
