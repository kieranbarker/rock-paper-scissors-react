function Game({ makeChoice }) {
  const handleClick = event => {
    makeChoice(event.target.dataset.id);
  };

  return (
    <div className="Game">
      <button type="button" data-id="rock" onClick={handleClick}>Rock</button>
      <button type="button" data-id="paper" onClick={handleClick}>Paper</button>
      <button type="button" data-id="scissors" onClick={handleClick}>Scissors</button>
    </div>
  );
}

export default Game;
