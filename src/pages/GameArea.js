import React from "react";
import { useHistory } from "react-router-dom";

const GameArea = ({
  flagData,
  handleClick,
  countryAsked,
  correctSound,
  errorSound,
  flagClicks,
}) => {
  let history = useHistory();

  if (flagClicks > 15) {
    history.push("/GameOver");
  }

  return (
    <div className="gameArea">
      <p className="countryAsked">{countryAsked}</p>

      <div className="flagCont">
        {flagData.map((i, k) => (
          <div
            className="flagItem"
            key={k}
            onClick={() => {
              handleClick(i.name);
              return i.name === countryAsked ? correctSound() : errorSound();
            }}
          >
            <div className="flag">{i.flag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameArea;
