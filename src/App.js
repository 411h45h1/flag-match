import { useState } from "react";
import useSound from "use-sound";
import "./App.scss";
import countryList from "./countryData";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GameArea from "./pages/GameArea";
import GameOver from "./pages/GameOver";

const App = () => {
  const [errorSound] = useSound("/sounds/error.mp3", { volume: 0.25 });
  const [correctSound] = useSound("/sounds/ding.mp3", { volume: 0.25 });

  const getFlagEmoji = (countryCode) =>
    countryCode.replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );

  let countryCodes = Object.keys(countryList);

  let countryCode1 = countryCodes[Math.floor(Math.random() * 248) + 1];
  let countryCode2 = countryCodes[Math.floor(Math.random() * 248) + 1];
  let countryCode3 = countryCodes[Math.floor(Math.random() * 248) + 1];
  let countryCode4 = countryCodes[Math.floor(Math.random() * 248) + 1];
  let countryCode5 = countryCodes[Math.floor(Math.random() * 248) + 1];
  let countryCode6 = countryCodes[Math.floor(Math.random() * 248) + 1];

  const [gameData, setGameData] = useState({
    flagClicks: 0,
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

  const handleClick = (countrySelected) => {
    if (countrySelected === countryAsked) {
      let countryCode1 = countryCodes[Math.floor(Math.random() * 248) + 1];
      let countryCode2 = countryCodes[Math.floor(Math.random() * 248) + 1];
      let countryCode3 = countryCodes[Math.floor(Math.random() * 248) + 1];
      let countryCode4 = countryCodes[Math.floor(Math.random() * 248) + 1];
      let countryCode5 = countryCodes[Math.floor(Math.random() * 248) + 1];
      let countryCode6 = countryCodes[Math.floor(Math.random() * 248) + 1];
      setGameData((prevState) => {
        return {
          ...prevState,
          flagClicks: prevState.flagClicks + 1,
          gameScore: prevState.gameScore + 1,
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
        };
      });
    } else {
      setGameData((prevState) => {
        return {
          ...prevState,
          flagClicks: prevState.flagClicks + 1,
          gameScore: prevState.gameScore - 1,
        };
      });
    }
  };

  const onReset = () =>
    setGameData((prevState) => {
      return {
        ...prevState,
        flagClicks: 0,
        gameScore: 0,
      };
    });

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 onClick={() => onReset()}>
            <Link className="title" to="/" style={{ textDecoration: "none" }}>
              Flag Match
            </Link>
          </h1>
          <h3>Score: {gameData.gameScore}</h3>
        </header>

        <Switch>
          <Route exact path="/">
            <GameArea
              flagData={gameData.flagData}
              handleClick={handleClick}
              countryAsked={countryAsked}
              correctSound={correctSound}
              errorSound={errorSound}
              flagClicks={gameData.flagClicks}
            />
          </Route>
          <Route exact path="/GameOver">
            <GameOver score={gameData.gameScore} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
