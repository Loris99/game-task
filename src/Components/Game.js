import React, { useState } from "react";
import Line from "./Line";
import styles from "./Game.module.css";
const SIZE = 4;

const Game = (props) => {
  const [codeValue, setCodeValue] = useState([]);

  const startGameHandler = (codeValue) => {
    console.log("clicked!");
    setCodeValue(
      (codeValue = Array(SIZE)
        .fill(0)
        .map((num) => (num = Math.floor(Math.random() * 10))))
    );
    console.log("secret code" + " " + codeValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <h1>Find The Secret Code</h1>
      </div>
      <div className={styles.game_bar}>
        <Line className={styles.line_display} secretCode={codeValue} />
      </div>
      <div className={styles.side_bar}>
        <button
          onClick={() => {
            startGameHandler(codeValue);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};
export default Game;
