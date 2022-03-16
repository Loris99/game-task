import Line from "./Line";
import "./Game.css";
import { useState } from "react";
const Game = (props) => {
  const [codeValue, setCodeValue] = useState([]);
  // const [isStarted,] = setState()
  //   const codeValue = new Array(4);
  //console.log(codeValue.length);

  const startGameHandler = (codeValue) => {
    console.log("clicked!");
    setCodeValue(
      (codeValue = Array(4)
        .fill(0)
        .map((num) => (num = Math.floor(Math.random() * 10))))
    );
    console.log("secret code" + " " + codeValue);
  };
  //   console.log(codeValue.length);

  return (
    <div className="container">
      <div className="top-bar">
        <h1>Find The Secret Code</h1>
      </div>
      <div className="game-bar">
        <Line />
      </div>
      <div className="side-bar">
        <button onClick={startGameHandler}>Start</button>
      </div>
    </div>
  );
};
export default Game;
