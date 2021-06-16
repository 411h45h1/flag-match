import React from "react";

const GameOver = ({ score }) => {
  return (
    <div className="gameOver">
      <p className="gameOverTitle">Game Over</p>
      <p className="gameOverText">Final Score: {score}</p>
    </div>
  );
};

export default GameOver;
