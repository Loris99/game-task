import React, { useEffect, useState } from "react";
import Line from "./Line";
import styles from "./Game.module.css";
const SIZE = 4;
const NUM_OF_LINES = 8;
const Game = (props) => {
  const [codeValue, setCodeValue] = useState([]);
  const [activeStep, setActiveStep] = useState(-1);
  const [clear, setClear] = useState(false);
  const [isAWin, setIsAWin] = useState();
  const [message, setMessage] = useState(" ");
  const [isStarted, setIsStarted] = useState(false);
  const updateActiveStep = (currentActiveStep) => {
    setActiveStep(currentActiveStep);
  };
  const updateIsAWin = (isAWin) => {
    setIsAWin(isAWin);
    setIsStarted(false);
  };

  useEffect(() => {
    if (isAWin === true) {
      setMessage(result.win);
    } else if (isAWin === false && !isStarted) {
      setMessage(result.lose);
    }
  }, [isAWin, isStarted]);

  const result = {
    win: "Congratulation! You've WON",
    lose: "oops, Game Over! try again",
    nothing: " ",
  };

  const startGameHandler = () => {
    const tempCodeValue = [];
    while (tempCodeValue.length < SIZE) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (tempCodeValue.indexOf(randomNumber) === -1)
        tempCodeValue.push(randomNumber);
    }
    setCodeValue(tempCodeValue);
    setMessage(result.nothing);
    updateActiveStep(0);
    setIsStarted(true);
    setIsAWin(false);

    setClear(!clear);
  };

  console.log("secret code ", codeValue);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h1>Find The Secret Code</h1>
      </div>
      <div className={styles.linesContainer}>
        {Array(NUM_OF_LINES)
          .fill()
          .map((value, index) => (
            <Line
              key={index}
              className={styles.lineDisplay}
              secretCode={codeValue}
              indexOfLine={index}
              activeStep={activeStep}
              clear={clear}
              isAWin={isAWin}
              updateIsAWin={updateIsAWin}
              updateActiveStep={updateActiveStep}
              isStarted={isStarted}
            />
          ))}
      </div>
      <div className={styles.sideBar}>
        <button className={styles.startButton} onClick={startGameHandler}>
          Start
        </button>
        <div className={styles.message}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
export default Game;
