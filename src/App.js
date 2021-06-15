import { useState } from "react";
import "./App.scss";
import { countryCodes, countryList } from "./countryData";
const App = () => {
  const getFlagEmoji = (countryCode) =>
    countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );

  const [gameData, setGameData] = useState({
    gameScore: 0,
    countryAsked: "",
  });

  const randomCountry = (obj) => {
    const keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Flag Match</h1>
        <h3>{gameData.gameScore}/10</h3>
      </header>

      <div className="gameArea">
        <p className="countryAsked">{randomCountry(countryList)}</p>

        <div className="flagCont">
          <div className="flagItem">
            <div className="flag">{getFlagEmoji("so")}</div>
          </div>
          <div className="flagItem">
            <div className="flag">{getFlagEmoji("so")}</div>
          </div>
          <div className="flagItem">
            <div className="flag">{getFlagEmoji("so")}</div>
          </div>
          <div className="flagItem">
            <div className="flag">{getFlagEmoji("so")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
