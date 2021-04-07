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

class App extends React.Component {
  state = {
    user: null,
    computer: shuffle(Object.keys(rules))[0],
    result: null
  }

  decideGame = user => {
    const { computer } = this.state;
    let result;
  
    if (user === computer) {
      result = 'draw';
    } else if (rules[user] === computer) {
      result = 'win';
    } else {
      result = 'lose';
    }


    this.setState({ user, result });
  }

  reset = () => {
    this.setState({
      user: null,
      computer: shuffle(Object.keys(rules))[0],
      result: null
    });
  }

  render() {
    const { user, computer, result } = this.state;
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
      screen = <Game decideGame={this.decideGame} />;
    }

    return (
      <div className="App">
        <Header />
        {screen}
      </div>
    );
  }
}

export default App;
