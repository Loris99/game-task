import React, { useEffect, useState } from "react";
import Line from "./Line";
import styles from "./Game.module.css";
const SIZE = 4;


const Game = (props) => {
  const [codeValue, setCodeValue] = useState([]);
  const [activeStep, setActiveStep] = useState(-1);
  const [trialIsDone, setTrialIsDone] = useState(true);
  //  let trialIsDone = true;
  useEffect(() => {
    console.log("trial: ", trialIsDone);
  }, [trialIsDone])
  useEffect(() => {
    console.log("active step: ", activeStep)
  }, [activeStep])
  const startGameHandler = (codeValue) => {
    console.log("clicked!");
    setCodeValue(
      (codeValue = Array(SIZE)
        .fill(0)
        .map((num) => (num = Math.floor(Math.random() * 10))))
    );
    setActiveStep(activeStep => activeStep + 1);
    setTrialIsDone(false)
    console.log("secret code ", codeValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <h1>Find The Secret Code</h1>
      </div>
      <div className={styles.game_bar}>
        {Array(8)
          .fill(0)
          .map((value, index) => (
            <Line
              key={index}
              className={styles.line_display}
              secretCode={codeValue}
              indexOfLine={index}
              activeStep={activeStep}
              setActiveStep={() => setActiveStep}
              trialIsDone={trialIsDone}
              setTrialIsDone={() => setTrialIsDone}
            />
          ))}
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
