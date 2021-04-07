import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';

class App extends React.Component {
  state = {
    choice: null
  }

  makeChoice = choice => {
    this.setState({ choice });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Game makeChoice={this.makeChoice} />
      </div>
    );
  }
}

export default App;
