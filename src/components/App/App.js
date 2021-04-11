import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Results from '../Results/Results';
import { shuffle } from '../../helpers';

const choices = ['rock', 'paper', 'scissors'];
const storageKey = 'rpsScore';

function App() {
  const [user, setUser] = useState(null);
  const [computer, setComputer] = useState(shuffle([...choices])[0]);
  const [score, setScore] = useState(0);

  // Which screen to show
  let screen;

  /**
   * Start a new game
   * @param {Number} score The new score after the previous game
   */
  function newGame(score) {
    setUser(null);
    setComputer(shuffle([...choices])[0]);
    setScore(score);
  }

  // Load the saved score
  useEffect(() => {
    let savedScore = localStorage.getItem(storageKey);
    if (!savedScore) return;
    setScore(parseInt(savedScore, 10));
  }, []);

  // Save the score when it changes
  useEffect(() => {
    localStorage.setItem(storageKey, score);
  }, [score]);

  // Decide which screen to show
  if (user) {
    screen = (
      <Results
        user={user}
        computer={computer}
        score={score}
        newGame={newGame}
      />
    );
  } else {
    screen = <Game choices={choices} setUser={setUser} />;
  }

  return (
    <div className="app">
      <Header score={score} />
      <main>
        {screen}
      </main>
    </div>
  );
}

export default App;
