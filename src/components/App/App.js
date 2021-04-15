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
  const [score, setScore] = useState({ won: 0, lost: 0, drew: 0 });

  // Which screen to show
  let screen;

  /**
   * Start a new game
   * @param {String} result The result of the previous game
   */
  function newGame(result) {
    setUser(null);
    setComputer(shuffle([...choices])[0]);
    setScore({ ...score, [result]: score[result] + 1 });
  }

  // Load the saved score
  useEffect(() => {
    let savedScore = localStorage.getItem(storageKey);
    if (!savedScore) return;
    setScore(JSON.parse(savedScore));
  }, []);

  // Save the score when it changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(score));
  }, [score]);

  // Decide which screen to show
  if (user) {
    screen = <Results user={user} computer={computer} newGame={newGame} />;
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
