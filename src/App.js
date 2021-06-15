import { useState } from "react";
import "./App.scss";
import countryList from "./countryData";

const App = () => {
  const getFlagEmoji = (countryCode) =>
    countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );

  let countryCodes = Object.keys(countryList);

  let countryCode1 = countryCodes[Math.floor(Math.random() * 249) + 1];
  let countryCode2 = countryCodes[Math.floor(Math.random() * 249) + 1];
  let countryCode3 = countryCodes[Math.floor(Math.random() * 249) + 1];
  let countryCode4 = countryCodes[Math.floor(Math.random() * 249) + 1];
  let countryCode5 = countryCodes[Math.floor(Math.random() * 249) + 1];
  let countryCode6 = countryCodes[Math.floor(Math.random() * 249) + 1];

  const [gameData, setGameData] = useState({
    gameScore: 0,
    flagData: [
      {
        countryCode: countryCode1,
        flag: getFlagEmoji(countryCode1),
        name: countryList[countryCode1],
      },
      {
        countryCode: countryCode2,
        flag: getFlagEmoji(countryCode2),
        name: countryList[countryCode2],
      },
      {
        countryCode: countryCode3,
        flag: getFlagEmoji(countryCode3),
        name: countryList[countryCode3],
      },
      {
        countryCode: countryCode4,
        flag: getFlagEmoji(countryCode4),
        name: countryList[countryCode4],
      },
      {
        countryCode: countryCode5,
        flag: getFlagEmoji(countryCode5),
        name: countryList[countryCode5],
      },
      {
        countryCode: countryCode6,
        flag: getFlagEmoji(countryCode6),
        name: countryList[countryCode6],
      },
    ],
  });

  const countryAsked =
    gameData.flagData[Math.floor(Math.random() * gameData.flagData.length)]
      .name;

  console.log(gameData.flagData);

  return (
    <div className="App">
      <header className="header">
        <h1>Flag Match</h1>
        <h3>{gameData.gameScore}/10</h3>
      </header>

      <div className="gameArea">
        <p className="countryAsked">{countryAsked}</p>

        <div className="flagCont">
          {gameData.flagData.map((i, k) => (
            <div className="flagItem" key={k}>
              <div className="flag">{i.flag}</div>
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
